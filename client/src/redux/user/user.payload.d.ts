export interface UserPayloadTD {
  baned: boolean;
  createdAt: Date;
  email: string;
  followers: {
    quantity: number;
    followersArray: string[];
  };
  following: {
    quantity: number;
    followingArray: string[];
  };
  id: string;
  notifications: string[];
  userName: string;
  userType: string;
}
