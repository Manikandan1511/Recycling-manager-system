import { MantineProvider, Container, Title, Paper, Group, Box, Text, Badge, SimpleGrid, Stack } from '@mantine/core';
import candidates from './data/mockData.json';
import Leaderboard from './components/Leaderboard';
import CandidateCard from './components/CandidateCard';

export default function App() {
  const sorted = [...candidates].sort((a, b) => 
    (b.scores.crisis + b.scores.sustainability + b.scores.motivation) - 
    (a.scores.crisis + a.scores.sustainability + a.scores.motivation)
  );

  return (
    <MantineProvider forceColorScheme="dark" theme={{ primaryColor: 'teal' }}>
      <Box sx={{ backgroundColor: '#0a0c10', minHeight: '100vh', color: '#f0f6fc', paddingBottom: '4rem' }}>
        <Container size="xl" py={40}>
          
          {/* Header with fixed 'wrap' property to resolve React warning */}
          <Paper p={35} radius="xl" mb={50} sx={{ 
              background: 'linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.01) 100%)',
              border: '1px solid rgba(255,255,255,0.1)',
              boxShadow: '0 20px 50px rgba(0,0,0,0.5)'
            }}>
            <Group justify="space-between" wrap="nowrap">
              <Box>
                <Title order={1} sx={{ 
                  fontSize: '2.8rem',
                  fontWeight: 900,
                  letterSpacing: '-1.5px',
                  background: 'linear-gradient(to right, #63e6be, #a2cf6e)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent'
                }}>
                  Recycling Manager System 
                </Title>
                <Text size="lg" color="dimmed" mt={5} weight={400}>
                  G CP Candidate Selection Dashboard
                </Text>
              </Box>
              <Badge size="xl" radius="md" p={25} variant="gradient" gradient={{ from: '#12b886', to: '#82c91e', deg: 45 }}>
                <Text size="sm" weight={700}>40 CANDIDATES ANALYZED</Text>
              </Badge>
            </Group>
          </Paper>

          <SimpleGrid cols={2} spacing={60} breakpoints={[{ maxWidth: 'lg', cols: 1 }]}>
            
            {/* Left: Leaderboard Section */}
            <Stack spacing="xl">
              <Title order={2} sx={{ fontSize: '1.6rem', fontWeight: 800 }}>🏆 Global Leaderboard</Title>
              <Leaderboard data={sorted.slice(0, 10)} />
            </Stack>
            
            {/* Right: Insights Section */}
            <Stack spacing="xl">
              <Group justify="space-between" align="flex-end">
                <Title order={2} sx={{ fontSize: '1.6rem', fontWeight: 800 }}>🔍 Top Talent Deep-Dive</Title>
                <Text size="sm" color="teal" weight={700} sx={{ cursor: 'pointer', borderBottom: '2px solid teal' }}>
                  FULL ANALYTICS →
                </Text>
              </Group>
              <SimpleGrid cols={2} spacing="xl" breakpoints={[{ maxWidth: 'sm', cols: 1 }]}>
                {sorted.slice(0, 4).map((c) => (
                  <CandidateCard key={c.id} candidate={c} />
                ))}
              </SimpleGrid>
            </Stack>

          </SimpleGrid>
        </Container>
      </Box>
    </MantineProvider>
  );
}