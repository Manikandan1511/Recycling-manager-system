import { Card, Text, Badge, Group, Divider } from '@mantine/core';
import SkillHeatmap from './SkillHeatmap';

export default function CandidateCard({ candidate }) {
  return (
    <Card 
      shadow="xl" 
      p={30} 
      radius="lg" 
      sx={{ 
        backgroundColor: '#161b22', 
        border: '1px solid #30363d',
        '&:hover': { borderColor: '#20c997', transform: 'scale(1.02)' },
        transition: 'all 0.2s ease'
      }}
    >
      <Group position="apart" mb="md">
        <Text weight={800} size="22px" color="white">{candidate.name}</Text>
        <Badge size="xl" color="teal" variant="light">{candidate.experience}Y EXP</Badge>
      </Group>

      <Text size="md" color="dimmed" mb="lg" sx={{ lineHeight: 1.6 }}>
        {candidate.skills.join(' • ')}
      </Text>

      <Divider my="md" color="#30363d" />
      
      <SkillHeatmap scores={candidate.scores} />
    </Card>
  );
}