// // const express = require('express');
// // const dotenv = require('dotenv');
// // const path = require('path');
// // const connectDB = require('./config/db');
// // const userRoutes = require('./routes/userRoutes');

// // dotenv.config();
// // const cookieParser = require('cookie-parser');
// // app.use(cookieParser());


// // const app = express();

// // // Set EJS as the templating engine
// // app.set('view engine', 'ejs');

// // // Serve static files
// // app.use(express.static(path.join(__dirname, 'public')));

// // // Parse form data
// // app.use(express.urlencoded({ extended: true }));

// // // Routes
// // app.use('/api/users', userRoutes);
// // app.get('/', (req, res) => res.render('index'));
// // app.use('/api/users', userRoutes);
// // app.get('/register', (req, res) => res.render('register')); // Register page
// // app.get('/login', (req, res) => res.render('login'));



// // const PORT = process.env.PORT || 5000;
// // app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
// const express = require('express');
// const dotenv = require('dotenv');
// const path = require('path');
// const cookieParser = require('cookie-parser');
// const connectDB = require('./config/db');
// const userRoutes = require('./routes/userRoutes');
// const adminRouter = require('./routes/Admin'); // Adjust path if necessary


// dotenv.config(); // Load environment varimpm ables

// const app = express(); // Initialize Express app

// // Connect to Database
// connectDB();
// app.use('/admin', adminRouter);

// // Set EJS as the templating engine
// app.set('view engine', 'ejs');

// // Middleware
// app.use(cookieParser()); // Parse cookies
// app.use(express.urlencoded({ extended: true })); // Parse form data
// app.use(express.static(path.join(__dirname, 'public'))); // Serve static files

// // Routes
// // app.get('/monitoring-space', (req, res) => {
// //     res.render('monitoring-space');
// // });
// app.use('/api/users', userRoutes); // Use user routes for API
// app.get('/', (req, res) => res.render('index')); // Home page
// app.get('/register', (req, res) => res.render('register')); // Register page
// app.get('/login', (req, res) => res.render('login')); // Login page
// app.get('/monitoring-space', (req, res) => {
//     res.render('monitoring-space');
// });

// app.get('/monitoring-space', (req, res) => {
//     res.render('monitoring-space');
// });

// app.get('/state-progress', (req, res) => {
//     // This could be fetching some data or rendering a template
//     // For example, rendering a view called "state-progress.ejs" with data
//     res.render('state-progress', { title: "State Level Progress" });
// });
// // Start Server
// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
// const express = require('express');
// const dotenv = require('dotenv');
// const path = require('path');
// const cookieParser = require('cookie-parser');
// const connectDB = require('./config/db');
// const userRoutes = require('./routes/userRoutes');
// const adminRouter = require('./routes/Admin'); // Adjust path if necessary

// dotenv.config(); // Load environment variables

// const app = express(); // Initialize Express app

// // Connect to Database
// connectDB().then(() => {
//     console.log("Database connected successfully.");
// }).catch((err) => {
//     console.error("Database connection failed:", err);
//     process.exit(1); // Exit the process if DB connection fails
// });

// // Set EJS as the templating engine
// app.set('view engine', 'ejs');

// // Middleware
// app.use(cookieParser()); // Parse cookies
// app.use(express.urlencoded({ extended: true })); // Parse form data
// app.use(express.static(path.join(__dirname, 'public'))); // Serve static files
// const session = require('express-session');
// app.use(session({
//     secret: process.env.SESSION_SECRET || 'your-session-secret', // Secret for session encryption
//     resave: false,
//     saveUninitialized: true,
//     cookie: { secure: process.env.NODE_ENV === 'production' }
// }));


// // Routes
// app.use('/api/users', userRoutes); // Use user routes for API
// app.use('/admin', adminRouter); // Admin routes
// app.get('/', (req, res) => res.render('index')); // Home page
// app.get('/register', (req, res) => res.render('register')); // Register page
// app.get('/login', (req, res) => res.render('login')); // Login page
// // app.get('/casteForm', (req, res) => res.render('casteForm'));
// app.get('/monitoring-space', (req, res) => res.render('monitoring-space')); // Monitoring space page
// app.get('/state-progress', (req, res) => {
//     // This could be fetching some data or rendering a template
//     // For example, rendering a view called "state-progress.ejs" with data
//     res.render('state-progress', { title: "State Level Progress" });
// });
// app.get('/dashboard', (req, res) => res.render('dashboard'));
// app.get('/officiallogin', (req, res) => {
//     res.render('officialLogin');  // Renders the EJS template (views/officialLogin.ejs)
// });
// app.get('/officiallogin', (req, res) => {
//     res.render('officialLogin');  // This looks for views/officialLogin.ejs
// });

// // POST route for handling login
// app.post('/api/officiallogin', async (req, res) => {
//     const { email, officerId, state, district, mandal, village } = req.body;

//     try {
//         // Validate officer ID and state (e.g., if it's a state officer and state is "state1")
//         if (officerId === "state" && state === "state1") {
//             return res.redirect('/monitoring-space');  // Redirect if valid
//         }

//         // Add more checks for district, mandal, village officers as needed

//         // If invalid, return an error
//         return res.status(401).json({ message: 'Invalid credentials' });

//     } catch (error) {
//         console.error('Error processing login', error);
//         res.status(500).json({ message: 'Server error' });
//     }
// });
// app.get('/state-progress', async (req, res) => {
//     try {
//         const casteCount = await User.countDocuments({ "casteApplication.state": "state2" });
//         const incomeCount = await User.countDocuments({ "incomeApplication.state": "state2" });
//         const ewsCount = await User.countDocuments({ "ewsApplication.state": "state2" });
//         const totalCount = casteCount + incomeCount + ewsCount;

//         res.render('state-progress', {
//             total: totalCount,
//             caste: casteCount,
//             income: incomeCount,
//             ews: ewsCount,
//         });
//     } catch (error) {
//         console.error("Error fetching progress data:", error);
//         res.status(500).send("Server error");
//     }
// });

// // 404 Handler
// // app.use((req, res) => {
// //     res.status(404).send("Page not found");
// // });

// // Error Handler
// // app.use((err, req, res, next) => {
// //     console.error(err.stack);
// //     res.status(500).send("Something broke!");
// // });
// app.use('/api', userRoutes);
// // Start Server
// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
const express = require('express');
const dotenv = require('dotenv');
const path = require('path');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const connectDB = require('./config/db');
const userRoutes = require('./routes/userRoutes');
const adminRouter = require('./routes/AdminRoutes'); // Adjust path if necessary
const User = require('./models/User'); // Adjust the path as needed
const certificateRequestsRouter = require('./routes/certificateRequests');
const moment = require('moment'); 


dotenv.config(); // Load environment variables

const app = express(); // Initialize Express app

// Connect to Database
connectDB()
    .then(() => console.log("Database connected successfully."))
    .catch((err) => {
        console.error("Database connection failed:", err);
        process.exit(1); // Exit the process if DB connection fails
    });

// Set EJS as the templating engine
app.set('view engine', 'ejs');

// Middleware
app.use(cookieParser()); // Parse cookies
app.use(express.urlencoded({ extended: true })); // Parse form data
app.use(express.json()); // Parse JSON data
app.use(express.static(path.join(__dirname, 'public'))); // Serve static files
app.use(
    session({
        secret: process.env.SESSION_SECRET || 'your-session-secret', // Secret for session encryption
        resave: false,
        saveUninitialized: true,
        cookie: { secure: process.env.NODE_ENV === 'production' },
    })
);

// Routes
app.use('/api/users', userRoutes); // User-related API routes
app.use('/admin', adminRouter); // Admin-related routes

// Home route
app.get('/', (req, res) => res.render('index')); // Render index.ejs

// Register route
app.get('/register', (req, res) => res.render('register')); // Render register.ejs

// Login route
app.get('/login', (req, res) => res.render('login')); // Render login.ejs

// Monitoring space
app.get('/monitoring-space', (req, res) => res.render('monitoring-space')); // Render monitoring-space.ejs

// Dashboard
app.get('/dashboard', (req, res) => res.render('dashboard')); // Render dashboard.ejs

// Official login
app.get('/officiallogin', (req, res) => res.render('officialLogin'));
// app.js or server.js
app.get('/aboutus', (req, res) => {
    res.render('aboutus');  // 'aboutus' is the name of your EJS file
});

app.use('/admin', adminRouter);

// POST: Official Login Validation
app.post('/api/officiallogin', async (req, res) => {
    const { email, officerId, state, district, mandal, village } = req.body;

    try {
        // Example validation logic
        if (officerId === "state" && state === "state1") {
            return res.redirect('/monitoring-space'); // Redirect to monitoring space if valid
        }

        // Add more checks for district, mandal, village officers as needed

        // If invalid, return an error
        return res.status(401).json({ message: 'Invalid credentials' });
    } catch (error) {
        console.error('Error processing login', error);
        res.status(500).json({ message: 'Server error' });
    }
});

// State Progress
// app.get('/state-progress', async (req, res) => {
//     try {
//         const state = "state2"; // Replace with dynamic logic for state selection if needed
//         const casteCount = await User.countDocuments({ "casteApplication.state": state });
//         const incomeCount = await User.countDocuments({ "incomeApplication.state": state });
//         const ewsCount = await User.countDocuments({ "ewsApplication.state": state });
//         const totalCount = casteCount + incomeCount + ewsCount;

//         res.render('state-progress', {
//             total: totalCount,
//             caste: casteCount,
//             income: incomeCount,
//             ews: ewsCount,
//         });
//     } catch (error) {
//         console.error("Error fetching progress data:", error);
//         res.status(500).send("Server error");
//     }
// });
// app.get('/state-progress', (req, res) => {
//     // Just render the form initially without any data
//     console.log(req.body.state);
//     res.render('state-progress', { state: '', total: 0, caste: 0, income: 0, ews: 0 });
// });

// Handle POST request to get the progress based on the selected state
// app.post('/state-progress', async (req, res) => {
//     try {
//         console.log(req.body.state);
//         const state ="state2";  // Default to state2 if no state is provided

//         // Fetch counts based on the selected state
//         const casteCount = await User.countDocuments({ "casteApplication.state": state });
//         const incomeCount = await User.countDocuments({ "incomeApplication.state": state });
//         const ewsCount = await User.countDocuments({ "ewsApplication.state": state });
//         const totalCount = casteCount + incomeCount + ewsCount;

//         // Pass data to the EJS template
//         res.render('state-progress', {
//             state: state,  // Pass selected state
//             total: totalCount,
//             caste: casteCount,
//             income: incomeCount,
//             ews: ewsCount
//         });
//     } catch (error) {
//         console.error("Error fetching progress data:", error);
//         res.status(500).send("Server error");
//     }
// });
app.post('/state-progress', async (req, res) => {
    try {
        const state = req.body.state || "state2";  // Default to state2 if no state is provided
        console.log(`State selected: ${state}`);  // Log the selected state

        // Fetch counts based on the selected state
        const casteCount = await User.countDocuments({ "casteApplication.state": state });
        const incomeCount = await User.countDocuments({ "incomeApplication.state": state });
        const ewsCount = await User.countDocuments({ "ewsApplication.state": state });
        const totalCount = casteCount + incomeCount + ewsCount;

        // Pass data to the EJS template
        res.render('statedata', {
            state: state,  // Pass selected state
            total: totalCount,
            caste: casteCount,
            income: incomeCount,
            ews: ewsCount
        });
    } catch (error) {
        console.error("Error fetching progress data:", error);
        res.status(500).send("Server error");
    }
});
app.post('/state-progress1', async (req, res) => {
    try {
        const state = "state1";  // Default to state2 if no state is provided
        console.log(`State selected: ${state}`);  // Log the selected state

        // Fetch counts based on the selected state
        const casteCount = await User.countDocuments({ "casteApplication.state": state });
        const incomeCount = await User.countDocuments({ "incomeApplication.state": state });
        const ewsCount = await User.countDocuments({ "ewsApplication.state": state });
        const totalCount = casteCount + incomeCount + ewsCount;

        // Pass data to the EJS template
        res.render('statedata', {
            state: state,  // Pass selected state
            total: totalCount,
            caste: casteCount,
            income: incomeCount,
            ews: ewsCount
        });
    } catch (error) {
        console.error("Error fetching progress data:", error);
        res.status(500).send("Server error");
    }
});
app.use('/admin',adminRouter);
// app.get('/error', (req, res, next) => {
//     next(createError(500, "Something went wrong!"));
//   });

// // 404 Handler
// app.use((req, res) => {
//     res.status(404).render('404', { message: "Page not found" }); // Render a 404.ejs view
// });

// // Error Handler
// app.use((err, req, res, next) => {
//     console.error(err.stack);
//     res.status(500).render('error', { message: "Something went wrong" }); // Render an error.ejs view
// });
// app.use((err, req, res, next) => {
//     console.error(err); // Log the error for debugging
//     res.status(err.status || 500);
//     res.render('error', { error: err }); // Pass the error object to the template
//   });

// Start Server
// app.use(adminRoutes);
// app.use(certificateRoutes);
// Route for the scan page
// app.get('/scan', async (req, res) => {
//     const { userId, certificateType } = req.query;

//     if (!userId || !certificateType) {
//         return res.status(400).send('Missing required parameters');
//     }

//     // Render the scan page
//     res.render('admin/scan', { userId, certificateType });
// });

// // Handle document verification and update the status
// app.post('/scan/completed', async (req, res) => {
//     const { userId, certificateType } = req.body;

//     try {
//         // Find the user by ID
//         const user = await User.findById(userId);

//         if (!user) {
//             return res.status(404).json({ message: 'User not found' });
//         }

//         // Update the certificate status and actual date
//         switch (certificateType) {
//             case 'caste':
//                 user.casteApplication.status = 'Accepted';
//                 user.casteApplication.actualDate = new Date();
//                 break;
//             case 'income':
//                 user.incomeApplication.status = 'Accepted';
//                 user.incomeApplication.actualDate = new Date();
//                 break;
//             case 'ews':
//                 user.ewsApplication.status = 'Accepted';
//                 user.ewsApplication.actualDate = new Date();
//                 break;
//             default:
//                 return res.status(400).json({ message: 'Invalid certificate type' });
//         }

//         // Save the user document with updated status
//         await user.save();

//         // Redirect back to the pending applications page
//         res.redirect('/admin/pending-applications');
//     } catch (error) {
//         console.error('Error updating status:', error);
//         res.status(500).json({ message: 'Error updating status' });
//     }
// });
// app.post('/admin/update-status', async (req, res) => {
//     try {
//         const { userId, certificateType } = req.body;

//         // Find the user by ID
//         const user = await User.findById(userId);

//         if (!user) {
//             return res.status(404).json({ message: 'User not found' });
//         }

//         // Update the status based on certificateType
//         switch (certificateType) {
//             case 'caste':
//                 user.casteApplication.status = 'Accepted';
//                 user.casteApplication.actualDate = new Date();
//                 break;
//             case 'income':
//                 user.incomeApplication.status = 'Accepted';
//                 user.incomeApplication.actualDate = new Date();
//                 break;
//             case 'ews':
//                 user.ewsApplication.status = 'Accepted';
//                 user.ewsApplication.actualDate = new Date();
//                 break;
//             default:
//                 return res.status(400).json({ message: 'Invalid certificate type' });
//         }

//         // Save the user document after status update
//         await user.save();

//         res.status(200).json({ message: 'Status updated successfully' });
//     } catch (error) {
//         console.error('Error updating status:', error);
//         res.status(500).json({ message: 'Error updating status' });
//     }
// });
app.post('/admin/update-status', async (req, res) => {
    try {
        const { userId, certificateType } = req.body;

        // Find the user by ID
        const user = await User.findById(userId);

        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        const currentDate = new Date();

        // Update the status based on certificateType
        switch (certificateType) {
            case 'caste':
                user.casteApplication.status = 'Accepted';
                user.casteApplication.actualDate = currentDate;  // Set actualDate
                break;
            case 'income':
                user.incomeApplication.status = 'Accepted';
                user.incomeApplication.actualDate = currentDate;  // Set actualDate
                break;
            case 'ews':
                user.ewsApplication.status = 'Accepted';
                user.ewsApplication.actualDate = currentDate;  // Set actualDate
                break;
            default:
                return res.status(400).json({ message: 'Invalid certificate type' });
        }

        // Save the user document after status update
        await user.save();

        res.status(200).json({ message: 'Status updated successfully' });
    } catch (error) {
        console.error('Error updating status:', error);
        res.status(500).json({ message: 'Error updating status' });
    }
});



// app.get('/admin/pending-applications', async (req, res) => {
//     try {
//         const usersWithPendingApplications = await User.find({
//             $or: [
//                 { 'casteApplication.status': 'Pending' },
//                 { 'incomeApplication.status': 'Pending' },
//                 { 'ewsApplication.status': 'Pending' }
//             ]
//         }).select('name email casteApplication incomeApplication ewsApplication');

//         // Render the pending applications page
//         res.render('admin/pendingApplications', { users: usersWithPendingApplications });
//     } catch (error) {
//         console.error('Error fetching pending applications:', error);
//         res.status(500).send('Error fetching pending applications');
//     }
// });

app.get('/admin/pending-applications', async (req, res) => {
    try {
        // Fetch users with pending certificates
        const usersWithPendingApplications = await User.find({
            $or: [
                { 'casteApplication.status': 'Pending' },
                { 'incomeApplication.status': 'Pending' },
                { 'ewsApplication.status': 'Pending' }
            ],
            // Exclude "Accepted" certificates
            $nor: [
                { 'casteApplication.status': 'Accepted' },
                { 'incomeApplication.status': 'Accepted' },
                { 'ewsApplication.status': 'Accepted' }
            ]
        }).select('name email casteApplication incomeApplication ewsApplication');

        // Render the pending applications page
        res.render('admin/pendingApplications', { users: usersWithPendingApplications });
    } catch (error) {
        console.error('Error fetching pending applications:', error);
        res.status(500).send('Error fetching pending applications');
    }
});
app.post('/scan/completed', async (req, res) => {
    const { userId, certificateType } = req.body;

    try {
        const user = await User.findById(userId);

        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        // Update status and actual date based on certificateType
        switch (certificateType) {
            case 'caste':
                user.casteApplication.status = 'Accepted';
                user.casteApplication.actualDate = new Date();
                break;
            case 'income':
                user.incomeApplication.status = 'Accepted';
                user.incomeApplication.actualDate = new Date();
                break;
            case 'ews':
                user.ewsApplication.status = 'Accepted';
                user.ewsApplication.actualDate = new Date();
                break;
            default:
                return res.status(400).json({ message: 'Invalid certificate type' });
        }

        await user.save();
        res.status(200).json({ message: 'Scan completed and status updated' });
    } catch (error) {
        console.error('Error updating status:', error);
        res.status(500).json({ message: 'Error updating status' });
    }
});
// Route to display the scan page
app.get('/scan', (req, res) => {
    res.render('scan');  // Simply render the scan page without passing any data
});

// Route to handle the completed status
app.post('/admin/update-status', async (req, res) => {
    try {
        const { userId, certificateType } = req.body;

        // Find the user by ID
        const user = await User.findById(userId);

        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        // Update the status based on certificateType
        switch (certificateType) {
            case 'caste':
                user.casteApplication.status = 'Accepted';
                user.casteApplication.actualDate = new Date();  // Set actualDate as today
                break;
            case 'income':
                user.incomeApplication.status = 'Accepted';
                user.incomeApplication.actualDate = new Date();
                break;
            case 'ews':
                user.ewsApplication.status = 'Accepted';
                user.ewsApplication.actualDate = new Date();
                break;
            default:
                return res.status(400).json({ message: 'Invalid certificate type' });
        }

        // Save the user document after status update
        await user.save();

        res.status(200).json({ message: 'Status updated successfully' });
    } catch (error) {
        console.error('Error updating status:', error);
        res.status(500).json({ message: 'Error updating status' });
    }
});

//  app.get('/admin/get-status', async (req, res) => {
//     const { userId, certificateType } = req.query;

//     try {
//         const user = await User.findById(userId);
//         if (!user) {
//             return res.status(404).json({ message: 'User not found' });
//         }

//         let status;
//         switch (certificateType) {
//             case 'caste':
//                 status = user.casteApplication?.status;
//                 break;
//             case 'income':
//                 status = user.incomeApplication?.status;
//                 break;
//             case 'ews':
//                 status = user.ewsApplication?.status;
//                 break;
//             default:
//                 return res.status(400).json({ message: 'Invalid certificate type' });
//         }

//         res.json({ status: status || 'No status available' });
//     } catch (error) {
//         res.status(500).json({ message: 'Error fetching status', error: error.message });
//     }
// });
// app.get('/scan',function(req,res){
//     res.render('scan')
// });
app.get('/track-status',function(req,res){
    res.render('track-status')
});
app.get('/certificate-status', async (req, res) => {
    try {
        // Fetch the users and their certificate application details
        const users = await User.find({}); // Assuming a User model with nested certificate applications
        
        // Render the 'certificate-status' page and pass the users data
        res.render('certificate-status', { users });
    } catch (error) {
        console.error('Error fetching users:', error);
        res.status(500).send('Error fetching users');
    }
});
// Express route to display status for the logged-in user or a particular user
app.get('/track-status', async (req, res) => {
    try {
        // Assuming you have a logged-in user session or a specific user ID
        const userId = req.session.userId || req.params.userId; // Fetch userId from session or params
        const user = await User.findById(userId); // Find the user by ID

        if (!user) {
            return res.status(404).send('User not found');
        }

        // Pass the user data to the view
        res.render('user-certificatestatus', { user: user });
    } catch (error) {
        console.error('Error fetching user data:', error);
        res.status(500).send('Error fetching user data');
    }
});
// app.post('/state-comparison', async (req, res) => {
//     try {
//         const states = ["state1", "state2"];  // Define states to compare
//         const results = {};

//         // Fetch counts for each state
//         for (let state of states) {
//             const casteCount = await User.countDocuments({ "casteApplication.state": state });
//             const incomeCount = await User.countDocuments({ "incomeApplication.state": state });
//             const ewsCount = await User.countDocuments({ "ewsApplication.state": state });
//             const totalCount = casteCount + incomeCount + ewsCount;

//             results[state] = {
//                 total: totalCount,
//                 caste: casteCount,
//                 income: incomeCount,
//                 ews: ewsCount
//             };
//         }

//         // Pass both states' data to the EJS template
//         res.render('stateComparison', {
//             state1Data: results['state1'],
//             state2Data: results['state2']
//         });
//     } catch (error) {
//         console.error("Error fetching progress data:", error);
//         res.status(500).send("Server error");
//     }
// });
// app.get('/state-comparison', async (req, res) => {
//     try {
//         const states = ["state1", "state2"];
//         const results = {};

//         // Fetch counts for each state
//         for (let state of states) {
//             const casteCount = await User.countDocuments({ "casteApplication.state": state }) || 0;
//             const incomeCount = await User.countDocuments({ "incomeApplication.state": state }) || 0;
//             const ewsCount = await User.countDocuments({ "ewsApplication.state": state }) || 0;
//             const totalCount = casteCount + incomeCount + ewsCount;

//             results[state] = {
//                 total: totalCount,
//                 caste: casteCount,
//                 income: incomeCount,
//                 ews: ewsCount
//             };
//         }

//         res.render('stateComparison', {
//             state1Data: results['state1'] || {
//                 total: 0,
//                 caste: 0,
//                 income: 0,
//                 ews: 0
//             },
//             state2Data: results['state2'] || {
//                 total: 0,
//                 caste: 0,
//                 income: 0,
//                 ews: 0
//             }
//         });
//     } catch (error) {
//         console.error("Error fetching progress data:", error);
//         res.status(500).send("Server error");
//     }
// });
// app.post('/states-comparison', async (req, res) => {
//     try {
//         const states = ["state1", "state2"];  // Define states to compare
//         const results = {};

//         // Fetch counts for each state and status
//         for (let state of states) {
//             const pendingCasteCount = await User.countDocuments({ "casteApplication.state": state, "casteApplication.status": "Pending" });
//             const acceptedCasteCount = await User.countDocuments({ "casteApplication.state": state, "casteApplication.status": "Accepted" });
//             const rejectedCasteCount = await User.countDocuments({ "casteApplication.state": state, "casteApplication.status": "Rejected" });

//             const pendingIncomeCount = await User.countDocuments({ "incomeApplication.state": state, "incomeApplication.status": "Pending" });
//             const acceptedIncomeCount = await User.countDocuments({ "incomeApplication.state": state, "incomeApplication.status": "Accepted" });
//             const rejectedIncomeCount = await User.countDocuments({ "incomeApplication.state": state, "incomeApplication.status": "Rejected" });

//             const pendingEwsCount = await User.countDocuments({ "ewsApplication.state": state, "ewsApplication.status": "Pending" });
//             const acceptedEwsCount = await User.countDocuments({ "ewsApplication.state": state, "ewsApplication.status": "Accepted" });
//             const rejectedEwsCount = await User.countDocuments({ "ewsApplication.state": state, "ewsApplication.status": "Rejected" });

//             // Calculate total counts for each state
//             const totalPending = pendingCasteCount + pendingIncomeCount + pendingEwsCount;
//             const totalAccepted = acceptedCasteCount + acceptedIncomeCount + acceptedEwsCount;
//             const totalRejected = rejectedCasteCount + rejectedIncomeCount + rejectedEwsCount;

//             results[state] = {
//                 totalPending,
//                 totalAccepted,
//                 totalRejected,
//                 caste: {
//                     pending: pendingCasteCount,
//                     accepted: acceptedCasteCount,
//                     rejected: rejectedCasteCount
//                 },
//                 income: {
//                     pending: pendingIncomeCount,
//                     accepted: acceptedIncomeCount,
//                     rejected: rejectedIncomeCount
//                 },
//                 ews: {
//                     pending: pendingEwsCount,
//                     accepted: acceptedEwsCount,
//                     rejected: rejectedEwsCount
//                 }
//             };
//         }

//         // Pass both states' data to the EJS template
//         res.render('stateComparison', {
//             state1Data: results['state1'],
//             state2Data: results['state2']
//         });
//     } catch (error) {
//         console.error("Error fetching progress data:", error);
//         res.status(500).send("Server error");
//     }
// });
// app.get('/state-comparison', async (req, res) => {
//     try {
//         const states = ["state1", "state2"];  // Define states to compare
//         const results = {};

//         // Fetch counts for each state and status
//         for (let state of states) {
//             const pendingCasteCount = await User.countDocuments({ "casteApplication.state": state, "casteApplication.status": "Pending" });
//             const acceptedCasteCount = await User.countDocuments({ "casteApplication.state": state, "casteApplication.status": "Accepted" });
//             const rejectedCasteCount = await User.countDocuments({ "casteApplication.state": state, "casteApplication.status": "Rejected" });

//             const pendingIncomeCount = await User.countDocuments({ "incomeApplication.state": state, "incomeApplication.status": "Pending" });
//             const acceptedIncomeCount = await User.countDocuments({ "incomeApplication.state": state, "incomeApplication.status": "Accepted" });
//             const rejectedIncomeCount = await User.countDocuments({ "incomeApplication.state": state, "incomeApplication.status": "Rejected" });

//             const pendingEwsCount = await User.countDocuments({ "ewsApplication.state": state, "ewsApplication.status": "Pending" });
//             const acceptedEwsCount = await User.countDocuments({ "ewsApplication.state": state, "ewsApplication.status": "Accepted" });
//             const rejectedEwsCount = await User.countDocuments({ "ewsApplication.state": state, "ewsApplication.status": "Rejected" });

//             // Calculate total counts for each state
//             const totalPending = pendingCasteCount + pendingIncomeCount + pendingEwsCount;
//             const totalAccepted = acceptedCasteCount + acceptedIncomeCount + acceptedEwsCount;
//             const totalRejected = rejectedCasteCount + rejectedIncomeCount + rejectedEwsCount;

//             results[state] = {
//                 totalPending,
//                 totalAccepted,
//                 totalRejected,
//                 caste: {
//                     pending: pendingCasteCount,
//                     accepted: acceptedCasteCount,
//                     rejected: rejectedCasteCount
//                 },
//                 income: {
//                     pending: pendingIncomeCount,
//                     accepted: acceptedIncomeCount,
//                     rejected: rejectedIncomeCount
//                 },
//                 ews: {
//                     pending: pendingEwsCount,
//                     accepted: acceptedEwsCount,
//                     rejected: rejectedEwsCount
//                 }
//             };
//         }

//         // Pass both states' data to the EJS template
//         res.render('stateComparison', {
//             state1Data: results['state1'],
//             state2Data: results['state2']
//         });
//     } catch (error) {
//         console.error("Error fetching progress data:", error);
//         res.status(500).send("Server error");
//     }
// });

app.get('/district-comparison', async (req, res) => {
    try {
        const districts = ["district1", "district2"];
        const results = {};

        // Fetch counts for each district
        for (let district of districts) {
            const casteCount = await User.countDocuments({ "casteApplication.district": district }) || 0;
            const incomeCount = await User.countDocuments({ "incomeApplication.district": district }) || 0;
            const ewsCount = await User.countDocuments({ "ewsApplication.district": district }) || 0;
            const totalCount = casteCount + incomeCount + ewsCount;

            results[district] = {
                total: totalCount,
                caste: casteCount,
                income: incomeCount,
                ews: ewsCount
            };
        }

        res.render('districtComparison', {
            district1Data: results['district1'] || {
                total: 0,
                caste: 0,
                income: 0,
                ews: 0
            },
            district2Data: results['district2'] || {
                total: 0,
                caste: 0,
                income: 0,
                ews: 0
            }
        });
    } catch (error) {
        console.error("Error fetching progress data:", error);
        res.status(500).send("Server error");
    }
});
app.get('/mandal-comparison', async (req, res) => {
    try {
        const mandals = ["mandal1", "mandal2"];
        const results = {};

        // Fetch counts for each mandal
        for (let mandal of mandals) {
            const casteCount = await User.countDocuments({ "casteApplication.mandal": mandal }) || 0;
            const incomeCount = await User.countDocuments({ "incomeApplication.mandal": mandal }) || 0;
            const ewsCount = await User.countDocuments({ "ewsApplication.mandal": mandal }) || 0;
            const totalCount = casteCount + incomeCount + ewsCount;

            results[mandal] = {
                total: totalCount,
                caste: casteCount,
                income: incomeCount,
                ews: ewsCount
            };
        }

        res.render('mandalComparison', {
            mandal1Data: results['mandal1'] || {
                total: 0,
                caste: 0,
                income: 0,
                ews: 0
            },
            mandal2Data: results['mandal2'] || {
                total: 0,
                caste: 0,
                income: 0,
                ews: 0
            }
        });
    } catch (error) {
        console.error("Error fetching progress data:", error);
        res.status(500).send("Server error");
    }
});
app.get('/certificate-comparison', async (req, res) => {
    try {
        const states = ["state1", "state2"];
        const districts = ["district1", "district2"];
        const mandals = ["mandal1", "mandal2"];
        
        const results = {
            states: {},
            districts: {},
            mandals: {}
        };

        // Fetch counts for states
        for (let state of states) {
            const casteCount = await User.countDocuments({ "casteApplication.state": state }) || 0;
            const incomeCount = await User.countDocuments({ "incomeApplication.state": state }) || 0;
            const ewsCount = await User.countDocuments({ "ewsApplication.state": state }) || 0;
            const totalCount = casteCount + incomeCount + ewsCount;

            results.states[state] = {
                total: totalCount,
                caste: casteCount,
                income: incomeCount,
                ews: ewsCount
            };
        }

        // Fetch counts for districts
        for (let district of districts) {
            const casteCount = await User.countDocuments({ "casteApplication.district": district }) || 0;
            const incomeCount = await User.countDocuments({ "incomeApplication.district": district }) || 0;
            const ewsCount = await User.countDocuments({ "ewsApplication.district": district }) || 0;
            const totalCount = casteCount + incomeCount + ewsCount;

            results.districts[district] = {
                total: totalCount,
                caste: casteCount,
                income: incomeCount,
                ews: ewsCount
            };
        }

        // Fetch counts for mandals
        for (let mandal of mandals) {
            const casteCount = await User.countDocuments({ "casteApplication.mandal": mandal }) || 0;
            const incomeCount = await User.countDocuments({ "incomeApplication.mandal": mandal }) || 0;
            const ewsCount = await User.countDocuments({ "ewsApplication.mandal": mandal }) || 0;
            const totalCount = casteCount + incomeCount + ewsCount;

            results.mandals[mandal] = {
                total: totalCount,
                caste: casteCount,
                income: incomeCount,
                ews: ewsCount
            };
        }

        // Send data to the view
        res.render('certificateComparison', {
            results: results
        });
    } catch (error) {
        console.error("Error fetching progress data:", error);
        res.status(500).send("Server error");
    }
});
app.post('/state-district-mandal-comparison', async (req, res) => {
    try {
        const states = ["state1", "state2"];
        const certificateTypes = ["casteApplication", "incomeApplication", "ewsApplication"];
        const results = {};

        // Loop over each state
        for (let state of states) {
            results[state] = {
                caste: { Pending: 0, Accepted: 0, Rejected: 0 },
                income: { Pending: 0, Accepted: 0, Rejected: 0 },
                ews: { Pending: 0, Accepted: 0, Rejected: 0 },
                total: 0
            };

            // Loop over each certificate type
            for (let certType of certificateTypes) {
                const statuses = ['Pending', 'Accepted', 'Rejected'];
                
                for (let status of statuses) {
                    const count = await User.countDocuments({
                        [`${certType}.state`]: state,
                        [`${certType}.status`]: status
                    });
                    results[state][certType][status] = count;
                }
                
                // Calculate total requests for the state
                const totalRequests = await User.countDocuments({ [`${certType}.state`]: state });
                results[state].total += totalRequests;
            }
        }

        res.render('stateDistrictMandalComparison', { results });

    } catch (error) {
        console.error("Error fetching progress data:", error);
        res.status(500).send("Server error");
    }
});

app.get('/state-district-mandal-comparison', async (req, res) => {
    try {
        // Define states, districts, and mandals to compare
        const states = ["state1", "state2"];
        const results = {};

        // Fetch counts for each state, district, and mandal
        for (let state of states) {
            const casteCount = await User.countDocuments({ "casteApplication.state": state });
            const incomeCount = await User.countDocuments({ "incomeApplication.state": state });
            const ewsCount = await User.countDocuments({ "ewsApplication.state": state });

            // Add counts for district and mandal as well, if needed

            results[state] = {
                caste: { pending: 0, accepted: 0, rejected: 0 },
                income: { pending: 0, accepted: 0, rejected: 0 },
                ews: { pending: 0, accepted: 0, rejected: 0 },
                total: casteCount + incomeCount + ewsCount
            };

            // Additional logic to populate pending, accepted, and rejected counts based on status
        }

        // Pass the results to the EJS template
        res.render('stateDistrictMandalComparison', {
            results: results
        });
    } catch (error) {
        console.error("Error fetching comparison data:", error);
        res.status(500).send("Server error");
    }
});
app.get('/stateComparison', async (req, res) => {
    try {
      const response = await fetch('http://localhost:5000/api/stateComparison');
      const data = await response.json();
      res.render('stateComparison', {
        state1Data: data.state1Data,
        state2Data: data.state2Data
      });
    } catch (err) {
      console.error(err);
      res.status(500).send('Error fetching data');
    }
  });
  
  app.post('/state-status-comparison', async (req, res) => {
    try {
        const states = ["state1", "state2"];
        const certificateTypes = ["casteApplication", "incomeApplication", "ewsApplication"];
        const statuses = ['Pending', 'Accepted', 'Rejected'];
        const results = {};

        for (let state of states) {
            results[state] = {};

            for (let certType of certificateTypes) {
                results[state][certType] = { Pending: 0, Accepted: 0, Rejected: 0 };

                for (let status of statuses) {
                    const count = await User.countDocuments({
                        [`${certType}.state`]: state,
                        [`${certType}.status`]: status
                    });
                    results[state][certType][status] = count;
                }
            }
        }

        res.render('stateStatusComparison', { results });
    } catch (error) {
        console.error("Error fetching data:", error);
        res.status(500).send("Server error");
    }
});
app.get('/state-status-comparison', async (req, res) => {
    try {
        // Initialize states
        const states = ["state1", "state2"];
        const results = {
            state1: { casteApplication: {}, incomeApplication: {}, ewsApplication: {} },
            state2: { casteApplication: {}, incomeApplication: {}, ewsApplication: {} }
        };

        // Loop through states to fetch counts
        for (let state of states) {
            // Fetch counts for Caste Certificate
            results[state].casteApplication = {
                Pending: await User.countDocuments({ "casteApplication.state": state, "casteApplication.status": "Pending" }),
                Accepted: await User.countDocuments({ "casteApplication.state": state, "casteApplication.status": "Accepted" }),
                Rejected: await User.countDocuments({ "casteApplication.state": state, "casteApplication.status": "Rejected" })
            };

            // Fetch counts for Income Certificate
            results[state].incomeApplication = {
                Pending: await User.countDocuments({ "incomeApplication.state": state, "incomeApplication.status": "Pending" }),
                Accepted: await User.countDocuments({ "incomeApplication.state": state, "incomeApplication.status": "Accepted" }),
                Rejected: await User.countDocuments({ "incomeApplication.state": state, "incomeApplication.status": "Rejected" })
            };

            // Fetch counts for EWS Certificate
            results[state].ewsApplication = {
                Pending: await User.countDocuments({ "ewsApplication.state": state, "ewsApplication.status": "Pending" }),
                Accepted: await User.countDocuments({ "ewsApplication.state": state, "ewsApplication.status": "Accepted" }),
                Rejected: await User.countDocuments({ "ewsApplication.state": state, "ewsApplication.status": "Rejected" })
            };
        }

        // Render the results to the EJS file
        res.render('stateStatusComparison', { results });
    } catch (error) {
        console.error("Error fetching data:", error);
        res.status(500).send("Server error");
    }
});
// app.get('/certificate-status-comparison', async (req, res) => {
//     try {
//         const states = ["state1", "state2"];
//         const results = {};

//         // Loop through states and fetch the counts for each certificate type and status
//         for (let state of states) {
//             results[state] = {};

//             // Loop through certificate types
//             const certificateTypes = ["casteApplication", "incomeApplication", "ewsApplication"];
//             for (let certType of certificateTypes) {
//                 results[state][certType] = {};

//                 // Get counts for Pending, Accepted, Rejected for each certificate type
//                 const pendingCount = await User.countDocuments({
//                     [`${certType}.state`]: state,
//                     [`${certType}.status`]: 'Pending'
//                 });
//                 const acceptedCount = await User.countDocuments({
//                     [`${certType}.state`]: state,
//                     [`${certType}.status`]: 'Accepted'
//                 });
//                 const rejectedCount = await User.countDocuments({
//                     [`${certType}.state`]: state,
//                     [`${certType}.status`]: 'Rejected'
//                 });

//                 // Store results
//                 results[state][certType] = {
//                     pending: pendingCount,
//                     accepted: acceptedCount,
//                     rejected: rejectedCount,
//                 };
//             }
//         }

//         // Render the result in the comparison page
//         res.render('certificateStatusComparison', { results });
//     } catch (error) {
//         console.error("Error fetching data:", error);
//         res.status(500).send("Server error");
//     }
// });


app.get('/certificate-status-comparison', async (req, res) => {
    try {
        // Fetch data for state1
        const state1CastePending = await User.countDocuments({ "casteApplication.state": "state1", "casteApplication.status": "Pending" });
        const state1CasteAccepted = await User.countDocuments({ "casteApplication.state": "state1", "casteApplication.status": "Accepted" });
        const state1CasteRejected = await User.countDocuments({ "casteApplication.state": "state1", "casteApplication.status": "Rejected" });

        const state1IncomePending = await User.countDocuments({ "incomeApplication.state": "state1", "incomeApplication.status": "Pending" });
        const state1IncomeAccepted = await User.countDocuments({ "incomeApplication.state": "state1", "incomeApplication.status": "Accepted" });
        const state1IncomeRejected = await User.countDocuments({ "incomeApplication.state": "state1", "incomeApplication.status": "Rejected" });

        const state1EwsPending = await User.countDocuments({ "ewsApplication.state": "state1", "ewsApplication.status": "Pending" });
        const state1EwsAccepted = await User.countDocuments({ "ewsApplication.state": "state1", "ewsApplication.status": "Accepted" });
        const state1EwsRejected = await User.countDocuments({ "ewsApplication.state": "state1", "ewsApplication.status": "Rejected" });

        // Fetch data for state2
        const state2CastePending = await User.countDocuments({ "casteApplication.state": "state2", "casteApplication.status": "Pending" });
        const state2CasteAccepted = await User.countDocuments({ "casteApplication.state": "state2", "casteApplication.status": "Accepted" });
        const state2CasteRejected = await User.countDocuments({ "casteApplication.state": "state2", "casteApplication.status": "Rejected" });

        const state2IncomePending = await User.countDocuments({ "incomeApplication.state": "state2", "incomeApplication.status": "Pending" });
        const state2IncomeAccepted = await User.countDocuments({ "incomeApplication.state": "state2", "incomeApplication.status": "Accepted" });
        const state2IncomeRejected = await User.countDocuments({ "incomeApplication.state": "state2", "incomeApplication.status": "Rejected" });

        const state2EwsPending = await User.countDocuments({ "ewsApplication.state": "state2", "ewsApplication.status": "Pending" });
        const state2EwsAccepted = await User.countDocuments({ "ewsApplication.state": "state2", "ewsApplication.status": "Accepted" });
        const state2EwsRejected = await User.countDocuments({ "ewsApplication.state": "state2", "ewsApplication.status": "Rejected" });

        // Prepare data to pass to EJS
        const results = {
            state1Data: {
                castePending: state1CastePending,
                casteAccepted: state1CasteAccepted,
                casteRejected: state1CasteRejected,
                incomePending: state1IncomePending,
                incomeAccepted: state1IncomeAccepted,
                incomeRejected: state1IncomeRejected,
                ewsPending: state1EwsPending,
                ewsAccepted: state1EwsAccepted,
                ewsRejected: state1EwsRejected
            },
            state2Data: {
                castePending: state2CastePending,
                casteAccepted: state2CasteAccepted,
                casteRejected: state2CasteRejected,
                incomePending: state2IncomePending,
                incomeAccepted: state2IncomeAccepted,
                incomeRejected: state2IncomeRejected,
                ewsPending: state2EwsPending,
                ewsAccepted: state2EwsAccepted,
                ewsRejected: state2EwsRejected
            }
        };

        // Render the EJS template with the data
        res.render('certificateStatusComparison', results);
    } catch (error) {
        console.error('Error fetching data:', error);
        res.status(500).send('Server Error');
    }
});
app.get('/all',function(req,res){
    res.render('v');
})
app.post('/staff-workload-comparison', async (req, res) => {
    try {
        const state = req.body.state || "state2";  // Default to state2 if no state is provided
        console.log(`State selected: ${state}`);

        // Fetch pending counts based on the selected state (consider all types of certificates)
        const casteCount = await User.countDocuments({ "casteApplication.state": state, "casteApplication.status": "Pending" });
        const incomeCount = await User.countDocuments({ "incomeApplication.state": state, "incomeApplication.status": "Pending" });
        const ewsCount = await User.countDocuments({ "ewsApplication.state": state, "ewsApplication.status": "Pending" });

        const totalCount = casteCount + incomeCount + ewsCount;

        // Staff distribution for state1 and state2
        const staffData = {
            state1: {
                staff: 60,
                districts: { district1: 30, district2: 30 },
                mandals: { mandal1: 15, mandal2: 15 },
                villages: { village1: 7, village2: 8 }
            },
            state2: {
                staff: 40,
                districts: { district1: 20, district2: 20 },
                mandals: { mandal1: 10, mandal2: 10 },
                villages: { village1: 5, village2: 6 }
            }
        };

        const stateStaff = staffData[state];

        // Calculate workload, workload per staff, efficiency, and suggestions
        const workloadData = [
            { area: "State", workload: totalCount, staff: stateStaff.staff, areaType: "state" },
            { area: "District 1", workload: casteCount + incomeCount + ewsCount, staff: stateStaff.districts.district1, areaType: "district" },
            { area: "District 2", workload: casteCount + incomeCount + ewsCount, staff: stateStaff.districts.district2, areaType: "district" },
            { area: "Mandal 1", workload: casteCount + incomeCount + ewsCount, staff: stateStaff.mandals.mandal1, areaType: "mandal" },
            { area: "Mandal 2", workload: casteCount + incomeCount + ewsCount, staff: stateStaff.mandals.mandal2, areaType: "mandal" },
            { area: "Village 1", workload: casteCount + incomeCount + ewsCount, staff: stateStaff.villages.village1, areaType: "village" },
            { area: "Village 2", workload: casteCount + incomeCount + ewsCount, staff: stateStaff.villages.village2, areaType: "village" }
        ];

        // Calculate workload per staff and efficiency, and generate suggestions
        workloadData.forEach(area => {
            area.workloadPerStaff = area.workload / area.staff;
            if (area.workloadPerStaff > 1) {
                area.efficiency = "Overloaded";
                area.suggestion = "Increase staff or reallocate from underutilized areas.";
            } else if (area.workloadPerStaff < 0.8) {
                area.efficiency = "Underutilized";
                area.suggestion = "Reduce staff or reallocate to other areas.";
            } else {
                area.efficiency = "Efficient";
                area.suggestion = "No change needed. Staff is efficiently used.";
            }
        });

        // Pass the data to the EJS template
        res.render('staffWorkloadComparison', {
            state: state,
            total: totalCount,
            workloadData: workloadData
        });

    } catch (error) {
        console.error("Error fetching progress data:", error);
        res.status(500).send("Server error");
    }
});
// GET Method for rendering the comparison page
// app.get('/staff-workload-comparison', async (req, res) => {
//     try {
//         const state1 = "state1";
//         const state2 = "state2";

//         // Fetch cases (workload) from the database for State 1
//         const state1Cases = await User.countDocuments({ "casteApplication.state": state1 }) +
//                              await User.countDocuments({ "incomeApplication.state": state1 }) +
//                              await User.countDocuments({ "ewsApplication.state": state1 });

//         // Fetch cases (workload) from the database for State 2
//         const state2Cases = await User.countDocuments({ "casteApplication.state": state2 }) +
//                              await User.countDocuments({ "incomeApplication.state": state2 }) +
//                              await User.countDocuments({ "ewsApplication.state": state2 });

//         // Define the staff numbers for State 1 and State 2
//         const state1Staff = 60;
//         const state2Staff = 40;

//         // Handle the case when there are no cases (workload = 0)
//         const state1WorkloadPerStaff = state1Cases > 0 ? (state1Cases / state1Staff).toFixed(2) : "N/A";
//         const state2WorkloadPerStaff = state2Cases > 0 ? (state2Cases / state2Staff).toFixed(2) : "N/A";

//         // Define Efficiency and Suggestion based on the workload
//         const state1Efficiency = state1Cases > 0 && state1WorkloadPerStaff < 1 ? 'Underutilized' : (state1Cases > 0 ? 'Efficient' : 'No cases');
//         const state2Efficiency = state2Cases > 0 && state2WorkloadPerStaff < 1 ? 'Underutilized' : (state2Cases > 0 ? 'Efficient' : 'No cases');

//         const state1Suggestion = state1Efficiency === 'Underutilized' ? 
//             'Reduce staff or reallocate to other areas.' : 
//             (state1Efficiency === 'No cases' ? 'No cases to process.' : 'No change needed.');

//         const state2Suggestion = state2Efficiency === 'Underutilized' ? 
//             'Reduce staff or reallocate to other areas.' : 
//             (state2Efficiency === 'No cases' ? 'No cases to process.' : 'No change needed.');

//         // Fetch detailed data for districts, mandals, and villages
//         const district1Staff = 30;
//         const district2Staff = 30;

//         const district1Cases = await User.countDocuments({ "casteApplication.state": state1, "casteApplication.district": "district1" }) + 
//                                await User.countDocuments({ "incomeApplication.state": state1, "incomeApplication.district": "district1" }) + 
//                                await User.countDocuments({ "ewsApplication.state": state1, "ewsApplication.district": "district1" });

//         const district2Cases = await User.countDocuments({ "casteApplication.state": state1, "casteApplication.district": "district2" }) + 
//                                await User.countDocuments({ "incomeApplication.state": state1, "incomeApplication.district": "district2" }) + 
//                                await User.countDocuments({ "ewsApplication.state": state1, "ewsApplication.district": "district2" });

//         // Similarly handle mandals and villages with cases as well

//         // Pass all the data to the EJS template
//         res.render('staffWorkloadComparison', {
//             state1Cases, state1Staff, state1WorkloadPerStaff, state1Efficiency, state1Suggestion,
//             state2Cases, state2Staff, state2WorkloadPerStaff, state2Efficiency, state2Suggestion,
//             district1Cases, district1Staff,
//             district2Cases, district2Staff
//             // Add other areas here...
//         });
//     } catch (error) {
//         console.error("Error fetching staff workload comparison data:", error);
//         res.status(500).send("Server error");
//     }
// });

app.get('/staff-workload-comparison', async (req, res) => {
    try {
        const state1 = "state1";
        const state2 = "state2";

        // Fetch cases (workload) from the database for State 1
        const state1Cases = await User.countDocuments({ "casteApplication.state": state1 }) +
                             await User.countDocuments({ "incomeApplication.state": state1 }) +
                             await User.countDocuments({ "ewsApplication.state": state1 });

        // Fetch cases (workload) from the database for State 2
        const state2Cases = await User.countDocuments({ "casteApplication.state": state2 }) +
                             await User.countDocuments({ "incomeApplication.state": state2 }) +
                             await User.countDocuments({ "ewsApplication.state": state2 });

        // Define the staff numbers for State 1 and State 2
        const state1Staff = 60;
        const state2Staff = 40;

        // Handle the case when there are no cases (workload = 0)
        const state1WorkloadPerStaff = state1Cases > 0 ? (state1Cases / state1Staff).toFixed(2) : "N/A";
        const state2WorkloadPerStaff = state2Cases > 0 ? (state2Cases / state2Staff).toFixed(2) : "N/A";

        // Define Efficiency and Suggestion based on the workload
        const state1Efficiency = state1Cases > 0 && state1WorkloadPerStaff < 1 ? 'Underutilized' : (state1Cases > 0 ? 'Efficient' : 'No cases');
        const state2Efficiency = state2Cases > 0 && state2WorkloadPerStaff < 1 ? 'Underutilized' : (state2Cases > 0 ? 'Efficient' : 'No cases');

        const state1Suggestion = state1Efficiency === 'Underutilized' ? 
            'Reduce staff or reallocate to other areas.' : 
            (state1Efficiency === 'No cases' ? 'No cases to process.' : 'No change needed.');

        const state2Suggestion = state2Efficiency === 'Underutilized' ? 
            'Reduce staff or reallocate to other areas.' : 
            (state2Efficiency === 'No cases' ? 'No cases to process.' : 'No change needed.');

        // Fetch detailed data for districts, mandals, and villages for state1
        const district1Staff = 30;
        const district2Staff = 30;

        const district1Cases = await User.countDocuments({ "casteApplication.state": state1, "casteApplication.district": "district1" }) + 
                               await User.countDocuments({ "incomeApplication.state": state1, "incomeApplication.district": "district1" }) + 
                               await User.countDocuments({ "ewsApplication.state": state1, "ewsApplication.district": "district1" });

        const district2Cases = await User.countDocuments({ "casteApplication.state": state1, "casteApplication.district": "district2" }) + 
                               await User.countDocuments({ "incomeApplication.state": state1, "incomeApplication.district": "district2" }) + 
                               await User.countDocuments({ "ewsApplication.state": state1, "ewsApplication.district": "district2" });

        // Fetch cases for Mandals
        const mandal1Cases = await User.countDocuments({ "casteApplication.state": state1, "casteApplication.mandal": "mandal1" }) + 
                              await User.countDocuments({ "incomeApplication.state": state1, "incomeApplication.mandal": "mandal1" }) + 
                              await User.countDocuments({ "ewsApplication.state": state1, "ewsApplication.mandal": "mandal1" });

        const mandal2Cases = await User.countDocuments({ "casteApplication.state": state1, "casteApplication.mandal": "mandal2" }) + 
                              await User.countDocuments({ "incomeApplication.state": state1, "incomeApplication.mandal": "mandal2" }) + 
                              await User.countDocuments({ "ewsApplication.state": state1, "ewsApplication.mandal": "mandal2" });

        // Fetch cases for Villages
        const village1Cases = await User.countDocuments({ "casteApplication.state": state1, "casteApplication.village": "village1" }) + 
                               await User.countDocuments({ "incomeApplication.state": state1, "incomeApplication.village": "village1" }) + 
                               await User.countDocuments({ "ewsApplication.state": state1, "ewsApplication.village": "village1" });

        const village2Cases = await User.countDocuments({ "casteApplication.state": state1, "casteApplication.village": "village2" }) + 
                               await User.countDocuments({ "incomeApplication.state": state1, "incomeApplication.village": "village2" }) + 
                               await User.countDocuments({ "ewsApplication.state": state1, "ewsApplication.village": "village2" });

        // Add the same for State 2 if needed

        // Pass all the data to the EJS template
        res.render('staffWorkloadComparison', {
            state1Cases, state1Staff, state1WorkloadPerStaff, state1Efficiency, state1Suggestion,
            state2Cases, state2Staff, state2WorkloadPerStaff, state2Efficiency, state2Suggestion,
            district1Cases, district1Staff,
            district2Cases, district2Staff,
            mandal1Cases, mandal1Staff: 15, // Example staff
            mandal2Cases, mandal2Staff: 15, // Example staff
            village1Cases, village1Staff: 7, // Example staff
            village2Cases, village2Staff: 8 // Example staff
        });
    } catch (error) {
        console.error("Error fetching staff workload comparison data:", error);
        res.status(500).send("Server error");
    }
});
const processingTimes = {
    caste: 5,
    income: 6,
    ews: 3
  };
  
  // Efficiency threshold
  const efficiencyThreshold = 6; // Considered efficient if processing time is <= 6 days
  
  // Function to calculate processing time for a certificate
  function calculateProcessingTime(requestDate, actualDate, type) {
    const processingTime = processingTimes[type];
    if (actualDate) {
      return moment(actualDate).diff(moment(requestDate), 'days');
    } else {
      // Calculate the expected date based on requestDate + processing time
      return moment(requestDate).add(processingTime, 'days').diff(moment(requestDate), 'days');
    }
  }
  
  // Function to calculate efficiency and generate suggestions
  function calculateEfficiency(processingTimes) {
    const totalProcessingTime = processingTimes.reduce((sum, time) => sum + time, 0) / processingTimes.length;
    const efficiency = totalProcessingTime <= efficiencyThreshold ? 'Efficient' : 'Inefficient';
    const suggestion = efficiency === 'Inefficient' ?
      'Reduce staff or reallocate staff to districts with fewer cases.' :
      'No action required; staff is working efficiently.';
  
    return { totalProcessingTime, efficiency, suggestion };
  }
  
  // Route to fetch efficiency data for all areas
  app.get('/efficiency-comparison', async (req, res) => {
    try {
      const users = await User.find();
      const efficiencyData = [];
  
      users.forEach(user => {
        const casteProcessingTime = calculateProcessingTime(user.casteApplication.requestDate, user.casteApplication.actualDate, 'caste');
        const incomeProcessingTime = calculateProcessingTime(user.incomeApplication.requestDate, user.incomeApplication.actualDate, 'income');
        const ewsProcessingTime = calculateProcessingTime(user.ewsApplication.requestDate, user.ewsApplication.actualDate, 'ews');
  
        // Store each area's processing times
        const areaData = {
          area: user.casteApplication.state, // You can adjust to include district, mandal, village if needed
          casteProcessingTime,
          incomeProcessingTime,
          ewsProcessingTime
        };
  
        // Calculate efficiency and suggestion
        const { totalProcessingTime, efficiency, suggestion } = calculateEfficiency([casteProcessingTime, incomeProcessingTime, ewsProcessingTime]);
        
        areaData.totalProcessingTime = totalProcessingTime;
        areaData.efficiency = efficiency;
        areaData.suggestion = suggestion;
  
        efficiencyData.push(areaData);
      });
  
    //   res.json(efficiencyData); // Send the data as JSON
    res.render('efficiency-comparison', { efficiencyData }); 
    } catch (error) {
      console.error('Error fetching data:', error);
      res.status(500).json({ message: 'Error fetching data' });
    }
  });
  const pendingRoutes = require('./routes/pendingRoutes'); // Adjust path if needed
  app.use('/admin', pendingRoutes);
  // Endpoint to get backlogs by state, district, and mandal
app.get('/report-backlogs', async (req, res) => {
    const { state, district, mandal } = req.query;

    const users = await User.find({
        'casteApplication.state': state,
        'casteApplication.district': district,
        'casteApplication.mandal': mandal
    });

    const backlogReports = users.map(user => {
        return {
            name: user.name,
            casteBacklog: user.getCertificateBacklogs().casteBacklog,
            incomeBacklog: user.getCertificateBacklogs().incomeBacklog,
            ewsBacklog: user.getCertificateBacklogs().ewsBacklog,
        };
    });

    res.json(backlogReports);
});
app.get('/allcompare',function(req,res){
    res.render('comparison');
})

const efficiencyRoutes = require('./routes/efficiencyRoutes');
const staffEfficiencyRouter = require('./routes/staffEfficiency');  
app.use('/staff-efficiency', staffEfficiencyRouter);
app.use('/', efficiencyRoutes);
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));