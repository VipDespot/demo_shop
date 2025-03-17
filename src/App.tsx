import { Button, MantineProvider } from "@mantine/core";
import '@mantine/core/styles.css';

import React from "react";

export const App = () => {
 
  return (
    <MantineProvider>
    <div>
      <Button color="yellow"  mt="md">PRESS</Button>
    </div>
    </MantineProvider>
  )
}
