const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://ankitk05263_db_user:T6v9RolCz5LgerlH@cluster0.mnxnzjx.mongodb.net/mini-post-app', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true
}).then(() => {
  console.log('Connected to MongoDB ✅');
}).catch((err) => {
  console.error('MongoDB connection error:❌', err);
});

const userSchema = mongoose.Schema({
    username: {
        type: String,
        unique: true,
        required: true
    },
    name: { 
        type: String,
        required: true
    },
    age:{ 
        type: Number,
        required: true
    },
    email: { type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true,
    },
    profilepic: {
        type: String,
        default: "default.png"

    },
    posts: [{ type: mongoose.Schema.Types.ObjectId, ref: 'post' }]
})

module.exports = mongoose.model('user', userSchema);


