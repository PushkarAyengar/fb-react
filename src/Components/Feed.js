import React from "react";
import StoryReel from "./StoryReel";
import MessageSender from "./MessageSender";
import Post from "./Post";

const Feed = () => {
  return (
    <div className="feed">
      <StoryReel />
      <MessageSender />
      <Post
        profilePic="https://tse2.mm.bing.net/th?id=OIP.VLkTV8db4xJdM0WPsCIrMAHaLH&amp;pid=Api&amp;P=0&amp;w=300&amp;h=300"
        message="This is a message"
        timestamp="time"
        imgName="imgName"
        username="Tony"
      />

      {/* {postsData.map((entry) => (
        <Post
          profilePic={entry.avatar}
          message={entry.text}
          timestamp={entry.timestamp}
          imgName={entry.imgName}
          username={entry.user}
        />
      )) */}
    </div>
  );
};

export default Feed;
