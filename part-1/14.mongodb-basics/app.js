const mongoose = require("mongoose");

mongoose
  .connect("mongodb+srv://milan_test:milan_test@cluster0.s2iaoir.mongodb.net/")
  .then(() => {
    console.log("Database connected successfully");
  })
  .catch((err) => {
    console.log("Database connection error", err);
  });

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  age: Number,
  isActive: Boolean,
  tags: [String],
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

// create user model
const User = mongoose.model("User", userSchema);

async function runQueryExample() {
  try {
    // create a new document
    const newUser = await User.create({
      name: "updated User",
      email: "updated@gmail.com",
      age: 75,
      isActive: true,
      tags: ["developer"],
    });
    // const newUser = new User({
    //   name: "test user",
    //   email: "test@gmail.com",
    //   age: 20,
    //   isActive: true,
    //   tags: ["designer", "manager"],
    // });
    // await newUser.save();
    // console.log("Created new user", newUser);
    // const allUsers = await User.find({});
    // const getUserOfActiveFalse = await User.find({ isActive: true });
    // console.log(getUserOfActiveFalse);
    // const getJohnDoeUser = await User.findOne({ name: "John Doe" });
    // console.log(getJohnDoeUser);
    // const getLastCreatedUserByUserId = await User.findById("69e5ea3b2675c298cff8076d");
    // console.log(getLastCreatedUserByUserId);

    // const selectedFields = await User.find().select("name email -_id");
    // console.log(selectedFields);

    // const limitedUsers = await User.find().limit(5).skip(1);
    // console.log(limitedUsers);

    // const sortedUsers = await User.find().sort({ age: 1 });
    // console.log(sortedUsers);

    // const countDocuments = await User.countDocuments({ isActive: true });
    // console.log(countDocuments);

    // const deletedUser = await User.findByIdAndDelete(newUser._id);
    // console.log("Deleted User ->", deletedUser);

    const updateUser = await User.findByIdAndUpdate(
      newUser._id,
      {
        $set: { age: 100 },
        $push: { tags: "updated" },
      },
      { new: true },
    );
    console.log("updated user", updateUser);
  } catch (error) {
    console.log("Error ->", error);
  } finally {
    await mongoose.connection.close();
  }
}

runQueryExample();
