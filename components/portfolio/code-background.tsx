'use client'

import { motion, useReducedMotion } from 'motion/react'

const snippets = [
  [
    "import { Component } from '@angular/core'",
    '',
    '@Component({',
    "  selector: 'app-dashboard',",
    "  templateUrl: './dashboard.html',",
    '})',
    'export class DashboardComponent {',
    '  users: User[] = []',
    '  constructor(private api: ApiService) {}',
    '  ngOnInit() {',
    '    this.api.getUsers().subscribe((u) => (this.users = u))',
    '  }',
    '}',
  ],
  [
    'export function Portfolio() {',
    "  const [role, setRole] = useState('dev')",
    '  return (',
    '    <main className="hero">',
    '      <h1>DJOUMBISSIE TUICHEU Patrick Raoul</h1>',
    '      <Projects items={projects} />',
    '    </main>',
    '  )',
    '}',
    '',
    'const stack = [',
    "  'Angular', 'React', 'TypeScript',",
    "  'ASP.NET', 'SQL Server', 'Python',",
    ']',
  ],
  [
    '[ApiController]',
    '[Route("api/[controller]")]',
    'public class ClientsController : ControllerBase',
    '{',
    '    private readonly AppDbContext _db;',
    '    [HttpGet]',
    '    public async Task<IActionResult> Get()',
    '    {',
    '        var clients = await _db.Clients.ToListAsync();',
    '        return Ok(clients);',
    '    }',
    '}',
  ],
  [
    'SELECT c.nom, COUNT(r.id) AS total',
    'FROM clients c',
    'JOIN reservations r ON r.client_id = c.id',
    "WHERE r.statut = 'confirmee'",
    'GROUP BY c.nom',
    'ORDER BY total DESC;',
    '',
    'def predict(model, data):',
    '    X = preprocess(data)',
    '    return model.predict(X)',
    '',
    'async function deploy() {',
    "  await build({ target: 'production' })",
    '}',
  ],
]

const keywords =
  /\b(import|from|export|class|const|return|function|async|await|public|private|readonly|var|def|new|SELECT|FROM|JOIN|ON|WHERE|GROUP|BY|ORDER|AS|DESC|COUNT)\b/

function CodeLine({ line }: { line: string }) {
  if (!line) return <span>&nbsp;</span>
  const parts = line.split(/('[^']*'|"[^"]*"|\b\w+\b|[{}()[\]<>])/g).filter(Boolean)
  return (
    <>
      {parts.map((part, i) => {
        let color = 'text-white/55'
        if (/^['"]/.test(part)) color = 'text-primary'
        else if (keywords.test(part) && /^\w+$/.test(part)) color = 'text-sky-400'
        else if (/^[{}()[\]<>]$/.test(part)) color = 'text-white/35'
        else if (/^[A-Z]\w+$/.test(part)) color = 'text-amber-200/80'
        return (
          <span key={i} className={color}>
            {part}
          </span>
        )
      })}
    </>
  )
}

function CodeColumn({ lines, duration, className }: { lines: string[]; duration: number; className: string }) {
  const reduce = useReducedMotion()
  const block = (copy: number) => (
    <div className="pb-10" aria-hidden={copy === 1 ? true : undefined}>
      {lines.map((line, i) => (
        <div key={i} className="flex gap-4 whitespace-pre">
          <span className="w-5 shrink-0 select-none text-right text-white/20">{i + 1}</span>
          <span>
            <CodeLine line={line} />
          </span>
        </div>
      ))}
    </div>
  )

  return (
    <div className={`absolute top-0 h-full overflow-hidden ${className}`}>
      <motion.div
        animate={reduce ? undefined : { y: ['0%', '-50%'] }}
        transition={{ duration, repeat: Infinity, ease: 'linear' }}
      >
        {block(0)}
        {block(1)}
        {block(0)}
        {block(1)}
      </motion.div>
    </div>
  )
}

export function CodeBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden bg-[oklch(0.18_0.03_255)]" aria-hidden="true">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-70"
        style={{ backgroundImage: "url('/images/footer-bg-tech.png')" }}
      />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,oklch(1_0_0/4%)_1px,transparent_1px),linear-gradient(to_bottom,oklch(1_0_0/4%)_1px,transparent_1px)] bg-[size:56px_56px]" />

      <div className="absolute inset-0 font-mono text-[11px] leading-6 opacity-50 md:text-xs">
        <CodeColumn lines={snippets[0]} duration={38} className="left-[2%] hidden w-[30%] md:block" />
        <CodeColumn lines={snippets[1]} duration={46} className="left-[30%] w-[40%] opacity-60 md:left-[34%] md:w-[30%]" />
        <CodeColumn lines={snippets[2]} duration={42} className="left-[62%] hidden w-[30%] lg:block" />
        <CodeColumn lines={snippets[3]} duration={52} className="left-[82%] hidden w-[30%] xl:block" />
      </div>

      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_25%_50%,oklch(0.18_0.03_255/92%)_0%,oklch(0.18_0.03_255/70%)_40%,transparent_75%)]" />
      <div className="absolute left-1/4 top-0 h-[420px] w-[620px] rounded-full bg-accent/20 blur-[140px]" />
      <div className="absolute -bottom-20 right-0 h-[380px] w-[380px] rounded-full bg-primary/20 blur-[130px]" />
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-b from-transparent to-background" />
    </div>
  )
}
