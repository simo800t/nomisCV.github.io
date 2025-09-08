import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Mail, Phone, MapPin, Globe, Zap, Rocket, Shield, Sword } from "lucide-react"

export default function StarWarsResume() {
  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Starfield background */}
      <div className="absolute inset-0 starfield pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto p-8 space-y-8">
        {/* Header */}
        <div className="text-center space-y-4">
          <h1 className="star-wars-title text-6xl md:text-8xl text-primary mb-4 drop-shadow-lg">Simon Holm</h1>
          <p className="text-xl text-muted-foreground font-medium">AI Padawan</p>
          <div className="lightsaber-divider w-64 mx-auto my-6" />
        </div>

        {/* Contact Information */}
        <Card className="bg-card/80 backdrop-blur-sm border-border/50">
          <CardContent className="pt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 text-sm">
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-accent" />
                <span>simon@cogito.dk</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-accent" />
                <span>+45 29 82 31 51</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-accent" />
                <span>Odense, Denmark</span>
              </div>
              <div className="flex items-center gap-2">
                <Globe className="h-4 w-4 text-accent" />
                <span>Born: Dec 16, 2002</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Professional Summary */}
        <Card className="bg-card/80 backdrop-blur-sm border-border/50">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-primary">
              <Zap className="h-5 w-5 text-accent" />
              Force Profile
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-foreground leading-relaxed">
              Dedicated AI Padawan currently mastering the ancient arts of Artificial Intelligence at the University of
              Southern Denmark. Strong in the Force of technology with experience across multiple sectors of the galaxy
              including logistics, retail, and hospitality. Passionate about computer technology, physical training, and
              the musical arts. Seeking to harness the power of AI to bring balance to the digital universe.
            </p>
          </CardContent>
        </Card>

        {/* Experience */}
        <Card className="bg-card/80 backdrop-blur-sm border-border/50">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-primary">
              <Rocket className="h-5 w-5 text-accent" />
              Mission Experience
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-semibold text-lg">Student Research Assistant</h3>
                <Badge variant="secondary">2025 - Present</Badge>
              </div>
              <p className="text-muted-foreground">IMADA (Institute for Mathematics and Computer Science), SDU</p>
            </div>

            <Separator />

            <div>
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-semibold text-lg">Logistics Operative</h3>
                <Badge variant="secondary">2023 - 2024</Badge>
              </div>
              <p className="text-muted-foreground">Coop Logistik, Odense</p>
            </div>

            <Separator />

            <div>
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-semibold text-lg">Warehouse Guardian</h3>
                <Badge variant="secondary">2021 - 2022</Badge>
              </div>
              <p className="text-muted-foreground">Kruuse, Odense</p>
            </div>

            <Separator />

            <div>
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-semibold text-lg">Retail Specialist</h3>
                <Badge variant="secondary">2020</Badge>
              </div>
              <p className="text-muted-foreground">Netto, Ullerslev</p>
            </div>

            <Separator />

            <div>
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-semibold text-lg">Kitchen Operative & Server</h3>
                <Badge variant="secondary">2018 - 2019</Badge>
              </div>
              <p className="text-muted-foreground">Sejlklubben, Kerteminde</p>
            </div>

            <Separator />

            <div>
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-semibold text-lg">Agricultural Specialist</h3>
                <Badge variant="secondary">2017 - 2019</Badge>
              </div>
              <p className="text-muted-foreground">Vestergaard Farm, Revninge</p>
            </div>
          </CardContent>
        </Card>

        {/* Galactic Service */}
        <Card className="bg-card/80 backdrop-blur-sm border-border/50">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-primary">
              <Shield className="h-5 w-5 text-accent" />
              Galactic Service & Leadership
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div>
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-semibold text-lg">Academic Council Chairman</h3>
                <Badge variant="secondary">Present</Badge>
              </div>
              <p className="text-muted-foreground mb-2">IMADA Council Board, University of Southern Denmark</p>
              <p className="text-sm">
                Leading student representation and academic governance for the Institute of Mathematics and Computer
                Science, advocating for student interests and facilitating communication between faculty and students.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Skills */}
        <Card className="bg-card/80 backdrop-blur-sm border-border/50">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-primary">
              <Sword className="h-5 w-5 text-accent" />
              Force Abilities & Skills
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold mb-3 text-primary">AI & Technology Powers</h4>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">Artificial Intelligence</Badge>
                  <Badge variant="outline">Machine Learning</Badge>
                  <Badge variant="outline">Computer Science</Badge>
                  <Badge variant="outline">Data Analysis</Badge>
                  <Badge variant="outline">Programming</Badge>
                  <Badge variant="outline">IT Systems</Badge>
                </div>
              </div>
              <div>
                <h4 className="font-semibold mb-3 text-primary">Communication Skills</h4>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">Danish (Native)</Badge>
                  <Badge variant="outline">English (Fluent)</Badge>
                  <Badge variant="outline">Technical Writing</Badge>
                  <Badge variant="outline">Presentation</Badge>
                  <Badge variant="outline">Team Collaboration</Badge>
                </div>
              </div>
              <div>
                <h4 className="font-semibold mb-3 text-primary">Physical Training</h4>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">Fitness Training</Badge>
                  <Badge variant="outline">Physical Conditioning</Badge>
                  <Badge variant="outline">Endurance</Badge>
                  <Badge variant="outline">Discipline</Badge>
                  <Badge variant="outline">Goal Achievement</Badge>
                </div>
              </div>
              <div>
                <h4 className="font-semibold mb-3 text-primary">Musical Arts</h4>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">Guitar Playing</Badge>
                  <Badge variant="outline">Music Theory</Badge>
                  <Badge variant="outline">Creative Expression</Badge>
                  <Badge variant="outline">Performance</Badge>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Education */}
        <Card className="bg-card/80 backdrop-blur-sm border-border/50">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-primary">
              <Shield className="h-5 w-5 text-accent" />
              Training & Education
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-semibold">Bachelor in Artificial Intelligence</h3>
                <Badge variant="secondary">2024 - Present</Badge>
              </div>
              <p className="text-muted-foreground mb-1">University of Southern Denmark (SDU), Odense</p>
              <p className="text-sm">
                Advanced training in AI systems, machine learning, and computational intelligence
              </p>
            </div>

            <Separator />

            <div>
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-semibold">Technical Academy Training</h3>
                <Badge variant="secondary">2020 - 2023</Badge>
              </div>
              <p className="text-muted-foreground mb-1">Kold Tekniske Gymnasium (HTX), Odense</p>
              <p className="text-sm">Technical education with focus on mathematics, physics, and technology systems</p>
            </div>
          </CardContent>
        </Card>

        {/* Notable Achievements */}
        <Card className="bg-card/80 backdrop-blur-sm border-border/50">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-primary">
              <Badge className="bg-accent text-accent-foreground">⭐</Badge>
              Notable Achievements
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-2">
                <span className="text-accent mt-1">•</span>
                <span>Successfully transitioned from technical academy to university-level AI studies</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent mt-1">•</span>
                <span>Gained diverse work experience across multiple industries while pursuing education</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent mt-1">•</span>
                <span>Demonstrated commitment to continuous learning and personal development</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent mt-1">•</span>
                <span>Balanced academic pursuits with physical training and creative expression</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent mt-1">•</span>
                <span>Developed strong work ethic through varied professional experiences</span>
              </li>
            </ul>
          </CardContent>
        </Card>

        {/* Footer */}
        <div className="text-center text-sm text-muted-foreground">
          <div className="lightsaber-divider w-32 mx-auto mb-4" />
          <p>""Someday I will be the most powerful Jedi ever!" - Anakin Skywalker</p>
        </div>
      </div>
    </div>
  )
}
