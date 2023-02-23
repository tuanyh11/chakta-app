import React, { useEffect, useMemo, useState } from "react";
import { useQuery } from "react-query";
import { useLocation } from "react-router-dom";
import { getBlogDetail, getSibarBlogdata } from "../../../api";
import {
  BlogCard,
  Button,
  Col,
  Container,
  InputV2,
  Row,
} from "../../../Components";
import { useBlogContext, useDate } from "../../../hooks";
import Sidebar from "../Sidebar";

const BlogDetail = () => {
  const getDate = useDate();

  const location = useLocation();

  const [selectId, setSelectId] = React.useState(null);

  const { Provider } = useBlogContext();

  const { data } = useQuery({
    queryKey: ["blogSidebarData"],
    queryFn: () => getSibarBlogdata().then((res) => res?.data),
  });

  const { data: blogData } = useQuery({
    queryKey: ["blogDetailData"],
    queryFn: () => getBlogDetail().then((res) => res?.data?.post),
  });

  const content = blogData?.acf_post?.component?.[0];

  const commentData = blogData?.comments?.nodes || [];

  const totalComments = useMemo(
    () =>
      commentData?.length +
      commentData?.reduce(
        (total, comment) => total + comment?.replies?.nodes?.length,
        0
      ),

    []
  );

  return (
    <div >
      <div>
        <BlogCard
          hiddenButton={true}
          hiddenBlockquote={false}
          hiddenDescription={false}
          {...content}
        />
        <div className="mt-[50px]">
          <h4 className="mb-[30px] text-2xl text-dark-color font-semibold font-poppins">
            {totalComments} thoughts on “The Problem With Typefaces on the Web”{" "}
          </h4>

          {/* comment componet */}

          <div className="">
            {commentData?.map((comment, index) => {
              // console.log(comment)

              return (
                <div key={comment.id}>
                  <Comment
                    comment={comment}
                    getDate={getDate}
                    children={comment?.replies?.nodes || []}
                    onReply={(id) => setSelectId(id)}
                    showReply={(id) => selectId === id}
                    onCancel={() => setSelectId(null)}
                  />
                </div>
              );
            })}
          </div>

          {selectId === null && <CommentForm />}
        </div>
      </div>
    </div>
  );
};

export default BlogDetail;

function CommentForm({ nameUser, onCancel = () => {} }) {
  return (
    <div className="mt-4 mb-10">
      {!nameUser ? (
        <h3 className="mb-[5px] text-[24px]  font-poppins text-dark-color font-semibold">
          Leave a Reply
        </h3>
      ) : (
        <div className="flex items-center font-poppins text-dark-color">
          <h3 className="mb-[5px] text-[24px]    font-semibold">
            Reply to {nameUser}
          </h3>
          <button onClick={() => onCancel()} className="text-[19px] ml-[5px] ">
            Cancel Reply
          </button>
        </div>
      )}
      <p className="mb-4">
        Your email address will not be published. Required fields are marked *
      </p>
      <form action="" className="">
        <textarea
          cols={45}
          rows={8}
          maxLength={65525}
          placeholder="Comment"
          required={true}
          className="px-[15px] py-[10px] w-full border border-solid outline-none"
        ></textarea>
        <InputV2 className={"border-[#eaeaea] "} placeholder="Name * " />
        <InputV2 className={"border-[#eaeaea] "} placeholder="Email * " />
        <InputV2 className={"border-[#eaeaea] "} placeholder="Website " />

        <div className="mb-4 ">
          <input
            type="checkbox"
            name=""
            id=""
            className="mr-2 w-4 h-4 translate-y-1 "
          />
          Save my name, email, and website in this browser for the next time I
          comment.
        </div>

        <Button label={"POST COMMENT"} />
      </form>
    </div>
  );
}

function Comment({ comment, getDate, children, showReply, onReply, onCancel }) {
  const authorName = comment?.author?.node?.name;

  const avatar = comment?.author?.node?.avatar?.url;

  return (
    <div>
      <div className="mb-10">
        <div className="flex ">
          <div className="min-w-[90px] min-h-[90px] h-[90px]">
            <img src={avatar} alt="" className="w-full h-full rounded-full" />
          </div>

          <div className="ml-[30px]">
            <div className="">
              <span className=" text-[18px]  font-medium text-dark-color">
                {authorName}
              </span>
              <span className="ml-3">{getDate()}</span>
            </div>
            <div
              className="mb-[15px]"
              dangerouslySetInnerHTML={{ __html: comment?.content }}
            ></div>
            <button
              onClick={() => onReply(comment.id)}
              className=" font-medium transition hover:text-main-color"
            >
              Reply
              <i className="fa-solid fa-arrow-right-long ml-[10px]"></i>
            </button>
          </div>
        </div>
      </div>

      {showReply(comment.id) && (
        <CommentForm nameUser={authorName} onCancel={onCancel} />
      )}

      {children.map((commentChil) => {
        return (
          <div key={commentChil?.id} className="md:pl-[60px]">
            <Comment
              comment={commentChil}
              getDate={getDate}
              children={[]}
              onCancel={onCancel}
              onReply={() => onReply(commentChil.id)}
              showReply={showReply}
            />
          </div>
        );
      })}
    </div>
  );
}
