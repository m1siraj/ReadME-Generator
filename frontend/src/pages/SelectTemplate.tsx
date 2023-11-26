import { Template } from "../api/generated";
import Card from "../components/Generator/Card";
import useTemplateQuery from "../hooks/useGetAllTemplates";

const SelectTemplate = () => {
  const { data, isLoading, isError } = useTemplateQuery();

  if (!data) return;
  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error</div>;

  console.log(data);

  return (
    <main>
      <div className="gap-5 flex items-center justify-center flex-wrap pt-[30px]">
        {/* Map cards */}
        {/* TODO: Add Lazy loading */}
        {data.map((data: Template, index: number) => {
          return (
            <Card
              author={data.author}
              createdAt={data.createdAt}
              contributors={data.contributors}
              description={data.description}
              imageURL={data.imageURL}
              isFeatured={data.isFeatured}
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
