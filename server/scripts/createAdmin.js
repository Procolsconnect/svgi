const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '../.env') });
const connectDB = require('../config/db');
const Admin = require('../models/Admin');
const bcrypt = require('bcryptjs');
const mongoose = require('mongoose');
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const question = (query) => new Promise((resolve) => rl.question(query, resolve));

const createAdmin = async () => {
    try {
        await connectDB();

        const email = await question('Enter Admin Email: ');
        const password = await question('Enter Admin Password: ');

        if (!email || !password) {
            console.log('Email and password are required.');
            process.exit(1);
        }

        const existingAdmin = await Admin.findOne({ email });
        if (existingAdmin) {
            console.log('Admin with this email already exists.');
            process.exit(1);
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const admin = new Admin({
            email,
            password: hashedPassword
        });

        await admin.save();
        console.log(`Admin created successfully: ${email}`);
    } catch (error) {
        console.error('Error creating admin:', error.message);
    } finally {
        rl.close();
        await mongoose.connection.close();
        process.exit(0);
    }
};

createAdmin();
