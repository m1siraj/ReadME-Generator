import { Get, Route } from "tsoa";

type TemplateResponse = Template[];

interface Template {
  id: string;
  title: string;
  author: Author;
  createdAt: string;
  contributors: Contributor[];
  description: string;
  imageURL: string;
  isFeatured: boolean;
  tags: Tag[];
}

interface Author {
  name: string;
  url: string;
}

interface Contributor {
  name: string;
  url: string;
  social: string;
}

interface Tag {
  value: string;
  label: string;
}

const orderByFeatured = (data: any) => {
  return data.sort((a: Template, b: Template) => {
    if (a.isFeatured) {
      return -1;
    } else if (b.isFeatured) {
      return 1;
    } else {
      return 0;
    }
  });
};

@Route("templates")
export default class TemplateController {
  @Get("/getTemplate")
  public async getTemplates(): Promise<TemplateResponse> {
    const data = [
      {
        id: "1",
        title: "Shaans Default Template",
        author: {
          name: "ShaanCoding",
          url: "http://github.com/ShaanCoding",
        },
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
        isFeatured: false,
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
        id: "2",
        title: "Best ReadME Template",
        author: {
          name: "Othneil Drew",
          url: "http://github.com/othneildrew",
        },
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
        isFeatured: true,
        contributors: [
          {
            name: "ShaanCoding",
            url: "http://shaancoding.github.io",
            social: "github",
          },
        ],
      },
      {
        id: "3",
        title: "Shaans Default Template",
        author: {
          name: "ShaanCoding",
          url: "http://github.com/ShaanCoding",
        },
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
        isFeatured: false,
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
        id: "4",
        title: "Shaans Default Template",
        author: {
          name: "ShaanCoding",
          url: "http://github.com/ShaanCoding",
        },
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
        isFeatured: false,
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
        id: "5",
        title: "Shaans Default Template",
        author: {
          name: "ShaanCoding",
          url: "http://github.com/ShaanCoding",
        },
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
        isFeatured: false,
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
        id: "6",
        title: "Shaans Default Template",
        author: {
          name: "ShaanCoding",
          url: "http://github.com/ShaanCoding",
        },
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
        isFeatured: false,
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
    ] as TemplateResponse;

    return orderByFeatured(data);
  }
}
