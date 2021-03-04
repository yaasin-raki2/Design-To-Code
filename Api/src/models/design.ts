import mongoose from "mongoose";

import { FileTypes, DifficultyLevels } from "../utilities/enums";

interface DesignAttrs {
  colorPalette: string;
  difficulty: DifficultyLevels;
  image: File;
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
    commentsArray?: {
      userId: string;
      commentText: string;
    }[];
  };
  submitions: {
    quantity: number;
    submitionsArray?: string[];
  };
}

interface DesignDoc extends mongoose.Document {
  colorPalette: string;
  difficulty: DifficultyLevels;
  image: File;
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
    commentsArray?: {
      userId: string;
      commentText: string;
    }[];
  };
  submitions: {
    quantity: number;
    submitionsArray?: string[];
  };
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
    type: File,
  },
  file: {
    required: true,
    typeOfFile: {
      required: true,
      type: String,
      enum: Object.values(FileTypes),
    },
  },
  likes: {
    required: true,
    quantity: {
      required: true,
      type: Number,
      default: 0,
    },
    likesOwners: [
      {
        required: true,
        userId: {
          required: true,
          type: String,
        },
      },
    ],
  },
  comments: {
    required: true,
    quantity: {
      required: true,
      type: Number,
      default: 0,
    },
    commentsArray: [
      {
        required: false,
        userId: {
          required: true,
          type: String,
        },
        commentText: {
          required: true,
          type: String,
        },
      },
    ],
  },
  submitions: {
    required: true,
    quantity: {
      required: true,
      type: Number,
      default: 0,
    },
    submitionsArray: [
      {
        required: false,
        type: String,
      },
    ],
  },
});

designSchema.statics.build = (attrs: DesignAttrs) => {
  return new Design(attrs);
};

const Design = mongoose.model<DesignDoc, DesignModel>("Design", designSchema);

export { Design };
