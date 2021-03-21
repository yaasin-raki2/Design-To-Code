import mongoose, { ObjectId } from "mongoose";

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

export interface SubmitionDoc extends mongoose.Document {
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
      liked: boolean;
    }[];
  };
  comments: {
    quantity: number;
    commentsArray: {
      userId: string;
      comment: string;
      _id?: ObjectId;
      likes?: {
        quantity: number;
        likesOwners: {
          userId: string;
          liked: boolean;
        }[];
      };
      replies?: {
        quantity: number;
        repliesArray: {
          userId: string;
          reply: string;
          _id?: ObjectId;
          likes?: {
            quantity: number;
            likesOwners: {
              userId: string;
              liked: boolean;
            }[];
          };
        }[];
      };
    }[];
  };
  views: {
    quantity: number;
    viewsArray: [
      {
        userId: string;
        quantity: number;
        dates: Date[];
      }
    ];
  };
}

export interface SubmitionModel extends mongoose.Model<SubmitionDoc> {
  build(attrs: SubmitionAttrs): SubmitionDoc;
}

const submitionSchema = new mongoose.Schema(
  {
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
          liked: {
            type: Boolean,
            default: false,
          },
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
                liked: {
                  type: Boolean,
                  default: false,
                },
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
                      liked: {
                        type: Boolean,
                        default: false,
                      },
                    },
                  ],
                },
              },
            ],
          },
        },
      ],
    },
    views: {
      quantity: {
        type: Number,
        default: 0,
      },
      viewsArray: [
        {
          userId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
          },

          quantity: {
            type: Number,
            default: 0,
          },
          dates: [Date],
          _id: false,
        },
      ],
    },
  },
  {
    timestamps: {
      createdAt: true,
      updatedAt: false,
    },
  }
);

submitionSchema.statics.build = (attrs: SubmitionAttrs) => {
  return new Submition(attrs);
};

const Submition = mongoose.model<SubmitionDoc, SubmitionModel>(
  "Submition",
  submitionSchema
);

export { Submition };
