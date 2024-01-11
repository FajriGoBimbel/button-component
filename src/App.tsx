import { Button } from "./components/ui/button";

const Home = () => {
  return (
    <div className="flex h-screen justify-center items-center gap-2">
      <Button>Default</Button>
      <Button
        variant="outline"
        size="lg"
        isTooltip={true}
        contentTooltip="test tooltip"
        tooltipPosition="bottom"
      >
        large
      </Button>
      <Button variant="secondary" size="sm">
        Small
      </Button>
      <Button variant="error">Variant Error</Button>
      <Button variant="link">Varian Link</Button>
    </div>
  );
};

export default Home;
