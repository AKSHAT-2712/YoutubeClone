import React from "react";

const commentsData = [
  {
    name: "Akshat",
    text: "lorem ispum dolor set amet ,consectetur adip ",
    replies: [],
  },
  {
    name: "Akshat",
    text: "lorem ispum dolor set amet ,consectetur adip ",
    replies: [
      {
        name: "Akshat",
        text: "lorem ispum dolor set amet ,consectetur adip ",
        replies: [],
      },
      {
        name: "Akshat",
        text: "lorem ispum dolor set amet ,consectetur adip ",
        replies: [
          {
            name: "Akshat",
            text: "lorem ispum dolor set amet ,consectetur adip ",
            replies: [
              {
                name: "Akshat",
                text: "lorem ispum dolor set amet ,consectetur adip ",
                replies: [
                  {
                    name: "Akshat",
                    text: "lorem ispum dolor set amet ,consectetur adip ",
                    replies: [
                      {
                        name: "Akshat",
                        text: "lorem ispum dolor set amet ,consectetur adip ",
                        replies: [],
                      },
                    ],
                  },
                  {
                    name: "Akshat",
                    text: "lorem ispum dolor set amet ,consectetur adip ",
                    replies: [],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    name: "Akshat",
    text: "lorem ispum dolor set amet ,consectetur adip ",
    replies: [],
  },
  {
    name: "Akshat",
    text: "lorem ispum dolor set amet ,consectetur adip ",
    replies: [],
  },
  {
    name: "Akshat",
    text: "lorem ispum dolor set amet ,consectetur adip ",
    replies: [],
  },
  {
    name: "Akshat",
    text: "lorem ispum dolor set amet ,consectetur adip ",
    replies: [],
  },
];

const Comment = ({ data }) => {
  const { name, text, replies } = data;
  return (
    <div className="flex bg-gray-100 w-fit my-2">
      <img
      className="w-12 h-12"
        alt="userImage"
        src="https://www.shutterstock.com/image-vector/user-icon-person-profile-avatar-260nw-601713017.jpg"
      />
      <div className="px-3">
        <p className="font-bold">{name}</p>
        <p>{text} </p>
      </div>
    </div>
  );
};

const CommentsList = ({comments}) =>{
    //Disclaimer : Dont use indexes as keys
    return comments.map((comment,index) => (
        <div key={index}>
        <Comment  data={comment}/>
        <div className="pl-5 ml-5 border border-l-black">
        <CommentsList comments = {comment.replies} />
        </div>
        </div>
    ))

}

const CommentsContainer = () => {
  return (
    <div className="m-5 p-2 w-fit">
      <h1 className="text-2xl font-bold">Comments:</h1>
      <CommentsList comments={commentsData} />
    </div>
  );
};

export default CommentsContainer;
