import Card from "../components/Generator/Card";

const sampleData: any = [
  {
    id: 1,
    title: "Shaans Default Template",
    author: "ShaanCoding",
    authorUrl: "http://github.com/ShaanCoding",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eget blandit diam, ac pellentesque diam. Aliquam pellentesque augue vitae lacinia molestie. Morbi ac arcu eu neque tempor gravida nec at nunc.",
    imageURL: "https://via.placeholder.com/150",
    createdAt: "2021-05-20T00:00:00.000Z",
    tags: [
      {
        value: "readme",
        label: "Read Me",
      },
      {
        value: "industry",
        label: "Industry",
      },
    ],
    featured: false,
    contributors: [
      {
        name: "ShaanCoding",
        url: "http://shaancoding.github.io",
        social: "github",
      },
      {
        name: "qtKite",
        url: "http://github.com/qtKite",
        social: "github",
      },
    ],
  },
  {
    id: 2,
    title: "Best ReadME Template",
    author: "Othneil Drew",
    authorUrl: "http://github.com/othneildrew",
    description: "This is a template",
    imageURL: "https://via.placeholder.com/150",
    createdAt: "2021-05-20T00:00:00.000Z",
    tags: [
      {
        value: "readme",
        label: "Read Me",
      },
      {
        value: "default",
        label: "Default",
      },
    ],
    featured: true,
    contributors: [
      {
        name: "ShaanCoding",
        url: "http://shaancoding.github.io",
        social: "github",
      },
    ],
  },
  {
    id: 3,
    title: "Shaans Default Template",
    author: "ShaanCoding",
    authorUrl: "http://github.com/ShaanCoding",
    description: "The industry standard",
    imageURL: "https://via.placeholder.com/150",
    createdAt: "2021-05-20T00:00:00.000Z",
    tags: [
      {
        value: "readme",
        label: "Read Me",
      },
      {
        value: "industry",
        label: "Industry",
      },
    ],
    featured: false,
    contributors: [
      {
        name: "ShaanCoding",
        url: "http://shaancoding.github.io",
        social: "github",
      },
      {
        name: "qtKite",
        url: "http://github.com/qtKite",
        social: "github",
      },
    ],
  },
  {
    id: 4,
    title: "Shaans Default Template",
    author: "ShaanCoding",
    authorUrl: "http://github.com/ShaanCoding",
    description: "The industry standard",
    imageURL: "https://via.placeholder.com/150",
    createdAt: "2021-05-20T00:00:00.000Z",
    tags: [
      {
        value: "readme",
        label: "Read Me",
      },
      {
        value: "industry",
        label: "Industry",
      },
    ],
    featured: false,
    contributors: [
      {
        name: "ShaanCoding",
        url: "http://shaancoding.github.io",
        social: "github",
      },
      {
        name: "qtKite",
        url: "http://github.com/qtKite",
        social: "github",
      },
    ],
  },
  {
    id: 5,
    title: "Shaans Default Template",
    author: "ShaanCoding",
    authorUrl: "http://github.com/ShaanCoding",
    description: "The industry standard",
    imageURL: "https://via.placeholder.com/150",
    createdAt: "2021-05-20T00:00:00.000Z",
    tags: [
      {
        value: "readme",
        label: "Read Me",
      },
      {
        value: "industry",
        label: "Industry",
      },
    ],
    featured: false,
    contributors: [
      {
        name: "ShaanCoding",
        url: "http://shaancoding.github.io",
        social: "github",
      },
      {
        name: "qtKite",
        url: "http://github.com/qtKite",
        social: "github",
      },
    ],
  },
  {
    id: 6,
    title: "Shaans Default Template",
    author: "ShaanCoding",
    authorUrl: "http://github.com/ShaanCoding",
    description: "The industry standard",
    imageURL: "https://via.placeholder.com/150",
    createdAt: "2021-05-20T00:00:00.000Z",
    tags: [
      {
        value: "readme",
        label: "Read Me",
      },
      {
        value: "industry",
        label: "Industry",
      },
    ],
    featured: false,
    contributors: [
      {
        name: "ShaanCoding",
        url: "http://shaancoding.github.io",
        social: "github",
      },
      {
        name: "qtKite",
        url: "http://github.com/qtKite",
        social: "github",
      },
    ],
  },
];

// TO MOVE TO SERVER SIDE PREPROCESSING
const orderByFeatured = (data: any) => {
  return data.sort((a: any, b: any) => {
    if (a.featured) {
      return -1;
    } else if (b.featured) {
      return 1;
    } else {
      return 0;
    }
  });
};

const SelectTemplate = () => {
  return (
    <main>
      <div className="gap-5 flex items-center justify-center flex-wrap pt-[30px]">
        {/* Map cards */}
        {/* TODO: Add Lazy loading */}
        {orderByFeatured(sampleData).map((data: any, index: number) => {
          return (
            <Card
              author={{
                name: data.author,
                url: data.authorUrl,
              }}
              createdAt={data.createdAt}
              contributors={data.contributors}
              description={data.description}
              imageURL={data.imageURL}
              isFeatured={data.featured}
              tags={data.tags}
              title={data.title}
              id={data.id}
              key={index}
            />
          );
        })}
      </div>
    </main>
  );
};

export default SelectTemplate;
