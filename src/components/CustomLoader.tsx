import { Loader, Text, Stack } from "@mantine/core";

export const CustomLoader = () => {
  return (
    <Stack align="center" gap="xs">
      <Loader size="lg" variant="dots" color="grape" />
      <Text c="dimmed" size="sm">
        Загрузка данных...
      </Text>
    </Stack>
  );
};
