import mongoose, { ObjectId } from "mongoose";
import { Password } from "../services/services";

import { UserType } from "../utilities/enums";

// An interface that describes the properties
// that are required to create a new User
interface UserAttrs {
  userName: string;
  email: string;
  password: string;
  userType: UserType;
  image?: string;
  banned?: boolean;
}

// An interface that describes the properties
// that a User Model has
interface UserModel extends mongoose.Model<UserDoc> {
  build(attrs: UserAttrs): UserDoc;
}

// An interface that describes the properties
// a User Document has
interface UserDoc extends mongoose.Document {
  userName: string;
  email: string;
  password: string;
  userType: UserType;
  image?: string;
  banned?: boolean;
  followers?: {
    quantity: number;
    followersArray: UserDoc[];
  };
  following?: {
    quantity: number;
    followingArray: UserDoc[];
  };
  notifications: string[];
}

export interface UserPayload {
  id: string;
  userName: string;
  email: string;
  userType: UserType;
}

const userSchema = new mongoose.Schema(
  {
    userName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    userType: {
      type: String,
      required: true,
      enum: Object.values(UserType),
    },
    image: {
      type: String,
      required: false,
    },
    banned: {
      type: Boolean,
      required: false,
      default: false,
    },
    followers: {
      quantity: {
        type: Number,
        default: 0,
      },
      followersArray: [
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: "User",
        },
      ],
    },
    following: {
      quantity: {
        type: Number,
        default: 0,
      },
      followingArray: [
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: "User",
        },
      ],
    },
    notifications: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Notification",
      },
    ],
  },
  {
    // When sending the user as Json back
    // Transform the _id property to id
    // remove the password && the versionKey
    toJSON: {
      transform(doc, ret) {
        ret.id = ret._id;
        delete ret._id;
        delete ret.password;
        delete ret.__v;
      },
    },
    timestamps: {
      createdAt: true,
      updatedAt: false,
    },
  }
);

userSchema.pre("save", async function (done) {
  if (this.isModified("password")) {
    const hashed = await Password.toHash(this.get("password"));
    this.set("password", hashed);
  }
});

userSchema.statics.build = (attrs: UserAttrs) => {
  return new User(attrs);
};

const User = mongoose.model<UserDoc, UserModel>("User", userSchema);

export { User };
