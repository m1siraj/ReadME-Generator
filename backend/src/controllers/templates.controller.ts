import { Get, Route, Route } from "tsoa";

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

type SidebarResponse = SidebarElement[];

interface SidebarElement {
  id: string;
  title: string;
  description: string;
  functions: Function[];
}

enum VariableType {
  TextArea = "TextArea",
  Input = "Input",
  Boolean = "Boolean",
  Array = "Array",
  Dropdown = "Dropdown",
  Object = "Object",
}

interface Function {
  name: string;
  macroName: string;
  variables?: Variable[];
}

interface Variable {
  label: string;
  variableName: string;
  value: string;
  type: VariableType;
}

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

  @Get("/getSidebar")
  public async getSidebar(): Promise<SidebarResponse> {
    const data = [
      {
        title: "The ReadME Project",
        description:
          "The first and capstone project of the GitHub ReadME Project",
        id: "1",
        functions: [
          {
            name: "License",
            macroName: "license",
            variables: [
              {
                label: "License URL",
                variableName: "licenseURL",
                value: "https://choosealicense.com/licenses/mit/",
                type: VariableType.Input,
              },
              {
                label: "License Type",
                variableName: "licenseType",
                value: "MIT",
                type: VariableType.Input,
              },
            ],
          },
        ],
      },
      {
        title: "Project A",
        description: "Description of Project A",
        id: "2",
        functions: [
          {
            name: "Feature A",
            macroName: "featureA",
            variables: [
              {
                label: "Variable A",
                variableName: "variableA",
                value: "Value A",
                type: VariableType.Input,
              },
              {
                label: "Variable B",
                variableName: "variableB",
                value: "Value B",
                type: VariableType.Input,
              },
            ],
          },
        ],
      },
      {
        title: "Project B",
        description: "Description of Project B",
        id: "3",
        functions: [
          {
            name: "Feature B",
            macroName: "featureB",
            variables: [
              {
                label: "Variable C",
                variableName: "variableC",
                value: "Value C",
                type: VariableType.Input,
              },
              {
                label: "Variable D",
                variableName: "variableD",
                value: "Value D",
                type: VariableType.Input,
              },
            ],
          },
        ],
      },
      {
        title: "Project C",
        description: "Description of Project C",
        id: "4",
        functions: [
          {
            name: "Feature C",
            macroName: "featureC",
            variables: [
              {
                label: "Variable E",
                variableName: "variableE",
                value: "Value E",
                type: VariableType.Input,
              },
              {
                label: "Variable F",
                variableName: "variableF",
                value: "Value F",
                type: VariableType.Input,
              },
            ],
          },
        ],
      },
      {
        title: "Project D",
        description: "Description of Project D",
        id: "5",
        functions: [
          {
            name: "Feature D",
            macroName: "featureD",
            variables: [
              {
                label: "Variable G",
                variableName: "variableG",
                value: "Value G",
                type: VariableType.Input,
              },
              {
                label: "Variable H",
                variableName: "variableH",
                value: "Value H",
                type: VariableType.Input,
              },
            ],
          },
        ],
      },
    ] as SidebarResponse;

    return data;
  }
}
