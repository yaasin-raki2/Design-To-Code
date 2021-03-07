import mongoose from "mongoose";

import { OSPlatforms } from "../utilities/enums";

interface SubmitionAttrs {
  userId: string;
  image: string;
  designName: string;
  sourceCode: {
    platform: OSPlatforms;
    link: string;
  };
}

interface SubmitionDoc extends mongoose.Document {
  userId: string;
  image: string;
  designName: string;
  sourceCode: {
    platform: OSPlatforms;
    link: string;
  };
  likes: {
    quantity: number;
    likesOwners: {
      userId: string;
    }[];
  };
  comments: {
    quantity: number;
    commentsArray: {
      userId: string;
      comment: string;
      likes: {
        quantity: number;
        likesOwners: {
          userId: string;
        }[];
      };
      replies: {
        quantity: number;
        repliesArray: {
          userId: string;
          reply: string;
          likes: {
            quantity: number;
            likesOwners: {
              userId: string;
            }[];
          };
        }[];
      };
    }[];
  };
}

interface SubmitionModel extends mongoose.Model<SubmitionDoc> {
  build(attrs: SubmitionAttrs): SubmitionDoc;
}

const submitionSchema = new mongoose.Schema({
  userId: {
    required: true,
    type: String,
  },
  image: {
    required: true,
    type: String,
  },
  designName: {
    required: true,
    type: String,
  },
  sourceCode: {
    platform: {
      required: true,
      type: String,
      enum: Object.values(OSPlatforms),
    },
    link: {
      required: true,
      type: String,
    },
  },
  likes: {
    quantity: {
      type: Number,
      default: 0,
    },
    likesOwners: [
      {
        userId: String,
      },
    ],
  },
  comments: {
    quantity: {
      type: Number,
      default: 0,
    },
    commentsArray: [
      {
        userId: String,
        comment: String,
        likes: {
          quantity: {
            type: Number,
            default: 0,
          },
          likesOwners: [
            {
              userId: String,
            },
          ],
        },
        replies: {
          quantity: {
            type: Number,
            default: 0,
          },
          repliesArray: [
            {
              userId: String,
              reply: String,
              likes: {
                quantity: {
                  type: Number,
                  default: 0,
                },
                likesOwners: [
                  {
                    userId: String,
                  },
                ],
              },
            },
          ],
        },
      },
    ],
  },
});

submitionSchema.statics.build = (attrs: SubmitionAttrs) => {
  return new Submition(attrs);
};

const Submition = mongoose.model<SubmitionDoc, SubmitionModel>(
  "Submition",
  submitionSchema
);

export { Submition };
