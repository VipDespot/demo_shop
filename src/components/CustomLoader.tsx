import React from 'react';
import { Loader, Text, Stack } from '@mantine/core';

export const CustomLoader = () => {
  return (
    <Stack align="center" gap="xs" mt="150px">
      <Loader size="lg" variant="dots" color="grape" />
      <Text c="dimmed" size="sm">
        Загрузка данных...
      </Text>
    </Stack>
  );
};
