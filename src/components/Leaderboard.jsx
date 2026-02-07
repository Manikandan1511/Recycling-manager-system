import { Table, Badge, Text, Card, ScrollArea } from '@mantine/core';

export default function Leaderboard({ data }) {
  return (
    <Card p={35} radius="xl" sx={{ backgroundColor: '#161b22', border: '1px solid #30363d' }}>
      <ScrollArea>
        <Table verticalSpacing="xl" horizontalSpacing="xl">
          <thead>
            <tr style={{ borderBottom: '2px solid #30363d' }}>
              <th style={{ color: '#8b949e', fontSize: '1rem', letterSpacing: '1px', textTransform: 'uppercase' }}>Rank</th>
              <th style={{ color: '#8b949e', fontSize: '1rem', letterSpacing: '1px', textTransform: 'uppercase' }}>Candidate</th>
              <th style={{ color: '#8b949e', fontSize: '1rem', letterSpacing: '1px', textTransform: 'uppercase' }}>Exp</th>
              <th style={{ color: '#8b949e', fontSize: '1rem', letterSpacing: '1px', textTransform: 'uppercase', textAlign: 'right' }}>Total Score</th>
            </tr>
          </thead>
          <tbody>
            {data.map((c, i) => (
              <tr key={c.id} style={{ borderBottom: '1px solid #21262d' }}>
                <td>
                  <Badge 
                    color={i < 3 ? "teal" : "gray"} 
                    variant={i < 3 ? "filled" : "outline"} 
                    size="xl" 
                    radius="md"
                    sx={{ fontSize: '1.1rem', height: 35 }}
                  >
                    {i + 1}
                  </Badge>
                </td>
                <td><Text weight={700} size="xl" sx={{ color: '#f0f6fc' }}>{c.name}</Text></td>
                <td><Text size="lg" color="dimmed" weight={500}>{c.experience} Years</Text></td>
                <td style={{ textAlign: 'right' }}>
                  <Text color="#63e6be" weight={900} size="xl" sx={{ fontFamily: 'Monaco, monospace' }}>
                    {c.scores.crisis + c.scores.sustainability + c.scores.motivation}
                  </Text>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </ScrollArea>
    </Card>
  );
}