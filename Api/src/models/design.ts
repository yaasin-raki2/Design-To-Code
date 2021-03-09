import mongoose, { ObjectId } from "mongoose";

import { FileTypes, DifficultyLevels } from "../utilities/enums";
import { SubmitionDoc } from "./submition";

interface DesignAttrs {
  colorPalette: string[];
  difficulty: DifficultyLevels;
  image: string;
  name: string;
  file: {
    typeOfFile: FileTypes;
    link: string;
  };
}

export interface DesignDoc extends mongoose.Document {
  colorPalette: string[];
  difficulty: DifficultyLevels;
  image: string;
  name: string;
  file: {
    typeOfFile: FileTypes;
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
  submitions: {
    quantity: number;
    submitionsArray: SubmitionDoc[];
  };
  approved: boolean;
}

export interface DesignModel extends mongoose.Model<DesignDoc> {
  build(attrs: DesignAttrs): DesignDoc;
}

const designSchema = new mongoose.Schema({
  colorPalette: {
    required: true,
    type: [String],
  },
  difficulty: {
    required: true,
    type: String,
    enum: Object.values(DifficultyLevels),
  },
  image: {
    required: true,
    type: String,
  },
  name: {
    required: true,
    type: String,
  },
  file: {
    typeOfFile: {
      required: true,
      type: String,
      enum: Object.values(FileTypes),
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
  submitions: {
    quantity: {
      type: Number,
      default: 0,
    },
    submitionsArray: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Submition",
      },
    ],
  },
  approved: {
    type: Boolean,
    default: false,
  },
});

designSchema.statics.build = (attrs: DesignAttrs) => {
  return new Design(attrs);
};

const Design = mongoose.model<DesignDoc, DesignModel>("Design", designSchema);

export { Design };
