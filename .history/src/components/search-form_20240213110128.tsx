export const SearchForm = () => {
  return (
    <form className="absolute bottom-7 flex w-full flex-col gap-4">
      <Input
        className="text-center"
        placeholder="Artist / Album / Title"
        inputSize="lg"
      />
      <Button className="w-full" size="lg" variant="ghost">
        Button
      </Button>
    </form>
  );
};
