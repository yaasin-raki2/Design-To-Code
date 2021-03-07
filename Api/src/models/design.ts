import mongoose from "mongoose";

import { FileTypes, DifficultyLevels } from "../utilities/enums";

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

interface DesignDoc extends mongoose.Document {
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
  submitions: {
    quantity: number;
    submitionsArray: string[];
  };
  approved: boolean;
}

interface DesignModel extends mongoose.Model<DesignDoc> {
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
          likesOwners: String,
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
  submitions: {
    quantity: {
      type: Number,
      default: 0,
    },
    submitionsArray: [String],
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
