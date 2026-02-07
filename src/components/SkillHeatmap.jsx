import { Progress, Stack, Text, Group } from '@mantine/core';

export default function SkillHeatmap({ scores }) {
  return (
    <Stack spacing="md" mt="xl">
      {[
        { label: 'Crisis Management', score: scores.crisis, color: 'red' },
        { label: 'Sustainability', score: scores.sustainability, color: 'green' },
        { label: 'Motivation', score: scores.motivation, color: 'blue' }
      ].map((item) => (
        <Stack spacing={6} key={item.label}>
          <Group position="apart">
            <Text size="sm" weight={700} sx={{ textTransform: 'uppercase', color: '#8b949e' }}>{item.label}</Text>
            <Text size="md" weight={800} color="white">{item.score}%</Text>
          </Group>
          <Progress value={item.score} color={item.color} size="md" radius="xl" />
        </Stack>
      ))}
    </Stack>
  );
}