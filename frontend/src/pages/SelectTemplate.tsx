import Card from "../components/Generator/Card";

const SelectTemplate = () => {
  

  return (
    <main>
      <div className="gap-5 flex items-center justify-center flex-wrap pt-[30px]">
        {/* Map cards */}
        {/* TODO: Add Lazy loading */}
        {[].map((data: any, index: number) => {
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
