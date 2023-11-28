import useSidebarQuery from "../../hooks/useGetSidebar";

const GeneratorSidebar = () => {
  // useGetSidebar, show all elements from all items
  const { data, isError, isFetching } = useSidebarQuery();

  if (isError) return <div>Error</div>;
  if (isFetching) return <div>Loading...</div>;
  if (!data) return <div>No data</div>;

  //   alert(JSON.stringify(data));

  [
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
              type: "Input",
            },
            {
              label: "License Type",
              variableName: "licenseType",
              value: "MIT",
              type: "Input",
            },
          ],
        },
      ],
    },
  ];

  return (
    <div>
      {data &&
        data.map((item) => (
          <div className="bg-red-500 mb-4" key={item.id}>
            <h1>Title: {item.title}</h1>
            <h2>Description: {item.description}</h2>
            <h3>ID: {item.id}</h3>
            {item.functions.map((func, index) => (
              <div key={index}>
                <h4>Name: {func.name}</h4>
                <h5>Macro Name: {func.macroName}</h5>
                {func.variables &&
                  func.variables.map((variable, index) => (
                    <div key={index}>
                      <h6>Label: {variable.label}</h6>
                      <h6>Variable Name: {variable.variableName}</h6>
                      <h6>Value: {variable.value}</h6>
                      <h6>Type: {variable.type}</h6>
                    </div>
                  ))}
              </div>
            ))}
          </div>
        ))}
    </div>
  );
};

export default GeneratorSidebar;
