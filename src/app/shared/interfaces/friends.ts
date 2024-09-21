export interface friends {
  friends: Friend[];
}

export interface Friend {
  name: string;
  profile_picture: string;
  story: Story;
  posts: Post[];
}

export interface Story {
  image: string;
  caption: string;
}

export interface Post {
  image: string;
  likes: number;
  comments: number;
  caption: string;
}
