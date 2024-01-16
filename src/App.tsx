import { Button } from "./components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "./components/ui/popover";

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
      <Popover>
        <PopoverTrigger asChild>
          <Button variant="outline">Open popover</Button>
        </PopoverTrigger>
        <PopoverContent className="w-80">
          <div className="grid gap-4">
            <div className="space-y-2">
              <h4 className="font-medium leading-none">Dimensions</h4>
              <p className="text-sm text-muted-foreground">
                Set the dimensions for the layer.
              </p>
            </div>
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );
};

export default Home;
