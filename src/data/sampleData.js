// ALL VALUES IN THIS FILE ARE SAMPLE / DEMONSTRATION DATA ONLY.
// They are NOT field measurements or final research results.
// Later, replace these exports with data from Supabase or the Python/YOLOv8 pipeline.

export const USERS = [
  { id: 'denr', name: 'Maria Santos', first: 'Maria', email: 'maria.demo@aerosea.example', password: 'demo1234',
    org: 'DENR', role: 'Environmental Monitoring', title: 'Environmental Monitoring Officer', initials: 'MS',
    focus: 'Monitoring dashboard, waste detection, density analysis and reports.',
    nav: ['dashboard', 'monitoring', 'detections', 'analytics', 'deployment', 'reports', 'settings'] },
  { id: 'lgu', name: 'Juan Dela Cruz', first: 'Juan', email: 'juan.demo@aerosea.example', password: 'demo1234',
    org: 'LGU / DEPS', role: 'Coastal Management', title: 'Local Environmental Management Staff', initials: 'JD',
    focus: 'Monitoring, waste distribution, density, cleanup planning and reports.',
    nav: ['dashboard', 'monitoring', 'detections', 'analytics', 'deployment', 'reports', 'settings'] },
  { id: 'tupad', name: 'Pedro Reyes', first: 'Pedro', email: 'pedro.demo@aerosea.example', password: 'demo1234',
    org: 'TUPAD', role: 'Cleanup Coordinator', title: 'TUPAD / Cleanup Coordinator', initials: 'PR',
    focus: 'Detection results, waste density, cleanup priority and recommended personnel.',
    nav: ['dashboard', 'detections', 'deployment', 'settings'] },
]

export const SEGMENT = 'Manila Bay — Segment A'

export const WASTE_CLASSES = [
  { name: 'Plastic', value: 42, color: '#0d9488' },
  { name: 'Cans', value: 28, color: '#d97706' },
  { name: 'Glass', value: 18, color: '#2563eb' },
  { name: 'Rubber', value: 12, color: '#7c3aed' },
]
export const CLASS_COLOR = Object.fromEntries(WASTE_CLASSES.map(c => [c.name, c.color]))

export const DENSITY = { value: 2.45, unit: 'kg/m³', status: 'High', sampleThreshold: 2.0 }

export const TREND = [1.2, 1.8, 1.5, 2.1, 1.9, 2.6, 2.45].map((v, i) => ({ survey: `Survey ${i + 1}`, density: v }))

export const DETECTIONS = [
  { time: '14:32:08', segment: SEGMENT, type: 'Plastic', conf: 0.91, density: 2.45, priority: 'High' },
  { time: '14:31:52', segment: SEGMENT, type: 'Cans', conf: 0.86, density: 2.45, priority: 'High' },
  { time: '14:30:40', segment: SEGMENT, type: 'Glass', conf: 0.79, density: 2.10, priority: 'Medium' },
  { time: '14:29:15', segment: SEGMENT, type: 'Rubber', conf: 0.83, density: 1.90, priority: 'Medium' },
]

export const SEGMENTS = [
  { name: 'Manila Bay — Segment A', density: 2.45, personnel: 3, priority: 'High' },
  { name: 'Manila Bay — Segment B', density: 1.90, personnel: 2, priority: 'Medium' },
  { name: 'Manila Bay — Segment C', density: 0.85, personnel: 1, priority: 'Low' },
]

export const METRICS = [
  { label: 'Precision', value: '0.91' },
  { label: 'Recall', value: '0.88' },
  { label: 'F1-score', value: '0.89' },
  { label: 'mAP@0.5', value: '0.89' },
  { label: 'IoU', value: '0.81' },
  { label: 'Inference Time', value: '142 ms' },
]

// rows = actual, columns = predicted (sample counts)
export const CONFUSION = {
  labels: ['Plastic', 'Cans', 'Glass', 'Rubber'],
  matrix: [[88, 4, 3, 5], [3, 85, 5, 7], [4, 6, 84, 6], [6, 5, 4, 85]],
}

export const PIPELINE = [
  { label: 'FIMI Mini 3 UAV', note: 'Aerial video acquisition', kind: 'component' },
  { label: 'FIMI Navi Mini', note: 'Live view → smartphone screen cast to laptop', kind: 'component' },
  { label: 'Python + OpenCV', note: 'Ground-side frame processing', kind: 'component' },
  { label: 'YOLOv8', note: 'Detection & 4-class classification', kind: 'component' },
  { label: 'Waste Density', note: 'Estimated in kg/m³', kind: 'demo' },
  { label: 'Personnel Estimate', note: 'Cleanup deployment recommendation', kind: 'demo' },
  { label: 'AeroSeæ Dashboard', note: 'Web-based monitoring', kind: 'component' },
]
