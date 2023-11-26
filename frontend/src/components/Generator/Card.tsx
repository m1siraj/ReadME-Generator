import { format } from "date-fns";
import React from "react";
import { generateTagColor } from "../../utils/generateTagColor";

interface CardProps {
  title: string;
  author: {
    name: string;
    url: string;
  };
  description: string;
  tags: {
    value: string;
    label: string;
  }[];
  contributors: {
    name: string;
    url: string;
    social: string;
  }[];
  imageURL: string;
  isFeatured: boolean;
  createdAt: string;
  id: string;
}

const Card: React.FC<CardProps> = ({
  title,
  author,
  description,
  tags,
  contributors,
  imageURL,
  isFeatured,
  createdAt,
  id,
}) => {
  const navigate = useNavigate();

  return (
    <div className="w-[314px] h-[500px] shrink-0 rounded-[30px] bg-primary p-[25px] text-secondary">
      <ImageTitleAuthor
        title={title}
        author={author}
        imageURL={imageURL}
        createdAt={createdAt}
        isFeatured={isFeatured}
      />
      <Description description={description} />
      <Tags tags={tags} />
      <Contributors contributors={contributors} />

      <div className="flex items-center justify-center">
        <button
          className="w-full gap-[15.6px] flex items-center justify-center 
      bg-themeGreen text-white font-poppins text-md font-semibold px-7 py-3 rounded-lg
      transition-all hover:bg-opacity-80"
          onClick={() => {
            navigate(`/generator/${id}`);
          }}
        >
          <img src="/icons/copy.svg" alt="copy" className="h-[16px] w-[16px]" />
          Select Template
        </button>
      </div>
    </div>
  );
};

// Need to import star to signify featured
import { AiFillStar } from "react-icons/ai";

const ImageTitleAuthor: React.FC<{
  imageURL: string;
  title: string;
  author: {
    name: string;
    url: string;
  };
  createdAt: string;
  isFeatured: boolean;
}> = ({ imageURL, title, author, createdAt, isFeatured }) => {
  return (
    <div className="flex gap-[25px] mb-[25px]">
      <div>
        <img
          className="rounded-full"
          src={imageURL}
          alt=""
          width="100"
          height="100"
        />
      </div>

      <div>
        <div className="flex items-center justify-between gap-2 mb-3">
          <h1 className="text-xl font-medium tracking-secondary">{title}</h1>
          {isFeatured && (
            <div className="text-yellow-400 text-[30px] font-medium tracking-secondary">
              <AiFillStar />
            </div>
          )}
        </div>

        <p className="text-[8px] font-normal tracking-primary mb-3">
          {format(new Date(createdAt), "MMM dd, yyyy")}
        </p>
        <p className="text-[8px] font-normal tracking-primary mb-3">
          {author.name}
        </p>
        <p className="text-[8px] font-normal tracking-primary">
          {author.url} - NEED TO ADD STYLING HERE
        </p>
      </div>
    </div>
  );
};

const Description: React.FC<{ description: string }> = ({ description }) => {
  return (
    <div className="mb-[25px]">
      <h2 className="text-xs font-medium tracking-secondary mb-3">
        Description
      </h2>
      <p className="text-[8px] font-normal tracking-primary mb-3">
        {description}
      </p>
    </div>
  );
};

const Tags: React.FC<{
  tags: {
    value: string;
    label: string;
  }[];
}> = ({ tags }) => {
  return (
    <div className="mb-[25px]">
      <h2 className="text-xs font-medium tracking-secondary mb-3">Tags</h2>
      <div className="text-[0.6rem] tracking-primary flex flex-wrap gap-1">
        {tags?.map(
          (
            tag: {
              value: string;
              label: string;
            },
            index: number
          ) => (
            <p
              style={{ backgroundColor: generateTagColor(tag.value) }}
              className="tracking-primary h-4 px-1 rounded-md"
              key={index}
            >
              {tag.label}
            </p>
          )
        )}
      </div>
    </div>
  );
};

const Contributors: React.FC<{
  contributors: {
    name: string;
    url: string;
    social: string;
  }[];
}> = ({ contributors }) => {
  return (
    <div className="mb-[25px]">
      <h2 className="text-xs font-medium tracking-secondary mb-3">
        Contributors
      </h2>
      <div className="text-[0.6rem] tracking-primary flex flex-wrap gap-1">
        {contributors?.map(
          (
            contributor: {
              name: string;
              url: string;
              social: string;
            },
            index: number
          ) => (
            <a
              href={contributor.url}
              key={index}
              className="flex items-center justify-center p-2
              border-gray-400 border-[0.25px] rounded-md hover:border-transparent
              hover:bg-secondary hover:text-secondary hover:rounded-md hover:bg-opacity-30  transition-all duration-300 ease-in-out
              "
            >
              {/* Social Icon */}
              <SocialIcon socialIcon={contributor.social} />
              {/* Name */}
              <p className="tracking-primary h-4 px-1 rounded-md" key={index}>
                {contributor.name}
              </p>
            </a>
          )
        )}
      </div>
    </div>
  );
};

import {
  AiFillGithub,
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillFacebook,
  AiFillInstagram,
  AiOutlineGlobal,
} from "react-icons/ai";
import { CustomButton } from "./GeneratorNavbar";
import { useNavigate } from "react-router-dom";

// World icon (earth)

const SocialIcon: React.FC<{ socialIcon: string }> = ({ socialIcon: key }) => {
  switch (key) {
    case "github":
      return <AiFillGithub />;
    case "twitter":
      return <AiFillTwitterCircle />;
    case "linkedin":
      return <AiFillLinkedin />;
    case "facebook":
      return <AiFillFacebook />;
    case "instagram":
      return <AiFillInstagram />;
    default:
      return <AiOutlineGlobal />;
  }
};

export default Card;

/*




      <div className="gap-[15px] flex flex-col">
        <div className="">
          <h4 className="text-[0.8125rem] font-medium tracking-secondary mb-[5px]">
            Description
          </h4>
          <p className="text-[0.6rem] tracking-primary">{description}</p>
        </div>

        <div className="">
          <h4 className="text-[0.8125rem] font-medium tracking-secondary mb-[5px]">
            Tags
          </h4>
          <div className="text-[0.6rem] tracking-primary flex flex-wrap gap-1">
            {tags.map((tag, index) => (
              <span
                style={{ backgroundColor: generateTagColor(tag.value) }}
                className={cn(
                  buttonVariants({ variant: "default", size: "sm" })
                )}
                key={index}
              >
                {tag.value}
              </span>
            ))}
          </div>
        </div>

        {<Contributors contributors={contributors} />}

        <Link href={`/generator/templates/${id}`}>Button</Link>
      </div>
    */
