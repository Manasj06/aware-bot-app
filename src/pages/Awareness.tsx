import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { AlertCircle, Users, Shield, TrendingUp, Heart, Brain, Activity, Droplets } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface Disease {
  id: string;
  name: string;
  icon: React.ComponentType<{ className?: string }>;
  category: string;
  shortDescription: string;
  fullDescription: string;
  symptoms: string[];
  prevention: string[];
  riskFactors: string[];
  color: string;
}

const diseases: Disease[] = [
  {
    id: "covid19",
    name: "COVID-19",
    icon: Shield,
    category: "Respiratory",
    shortDescription: "A respiratory disease caused by the SARS-CoV-2 virus, known for its rapid spread and varied symptoms.",
    fullDescription: "COVID-19 is an infectious disease caused by the SARS-CoV-2 virus. Most people infected with the virus will experience mild to moderate respiratory illness and recover without requiring special treatment. However, some will become seriously ill and require medical attention.",
    symptoms: ["Fever or chills", "Cough", "Shortness of breath", "Fatigue", "Loss of taste or smell", "Body aches"],
    prevention: ["Get vaccinated", "Wear masks in crowded spaces", "Maintain social distance", "Wash hands frequently", "Improve ventilation"],
    riskFactors: ["Age over 65", "Chronic medical conditions", "Weakened immune system", "Obesity"],
    color: "primary"
  },
  {
    id: "diabetes",
    name: "Diabetes",
    icon: Droplets,
    category: "Metabolic",
    shortDescription: "A chronic condition affecting blood sugar regulation, requiring lifelong management and lifestyle modifications.",
    fullDescription: "Diabetes is a chronic disease that occurs either when the pancreas does not produce enough insulin or when the body cannot effectively use the insulin it produces. This leads to raised glucose levels in the blood, which over time can cause serious damage to many body systems.",
    symptoms: ["Increased thirst", "Frequent urination", "Extreme hunger", "Unexplained weight loss", "Blurred vision", "Slow-healing sores"],
    prevention: ["Maintain healthy weight", "Regular physical activity", "Healthy diet", "Avoid tobacco", "Regular health check-ups"],
    riskFactors: ["Family history", "Overweight or obesity", "Physical inactivity", "Age over 45", "High blood pressure"],
    color: "secondary"
  },
  {
    id: "dengue",
    name: "Dengue",
    icon: Activity,
    category: "Vector-borne",
    shortDescription: "A mosquito-borne viral infection common in tropical regions, causing flu-like symptoms and potential complications.",
    fullDescription: "Dengue is a viral infection transmitted to humans through the bite of infected Aedes mosquitoes. The virus causes flu-like illness, and occasionally develops into a potentially lethal complication called severe dengue.",
    symptoms: ["High fever", "Severe headache", "Pain behind eyes", "Joint and muscle pain", "Skin rash", "Mild bleeding"],
    prevention: ["Use mosquito repellent", "Wear protective clothing", "Eliminate standing water", "Use mosquito nets", "Install screens on windows"],
    riskFactors: ["Living in tropical areas", "Prior dengue infection", "Weakened immune system", "Travel to endemic areas"],
    color: "accent"
  },
  {
    id: "malaria",
    name: "Malaria",
    icon: Users,
    category: "Parasitic",
    shortDescription: "A life-threatening disease transmitted by mosquitoes, prevalent in tropical and subtropical regions.",
    fullDescription: "Malaria is a life-threatening disease caused by parasites that are transmitted to people through the bites of infected female Anopheles mosquitoes. It is preventable and curable, but without prompt treatment, it can be fatal.",
    symptoms: ["Fever and chills", "Headache", "Nausea and vomiting", "Muscle pain", "Fatigue", "Sweating"],
    prevention: ["Use insecticide-treated nets", "Indoor residual spraying", "Antimalarial medications", "Protective clothing", "Avoid outdoor activities at dusk/dawn"],
    riskFactors: ["Travel to endemic areas", "Lack of immunity", "Pregnancy", "Young children", "HIV/AIDS"],
    color: "primary"
  },
  {
    id: "heart-disease",
    name: "Heart Disease",
    icon: Heart,
    category: "Cardiovascular",
    shortDescription: "A range of conditions affecting the heart, including coronary artery disease and heart rhythm problems.",
    fullDescription: "Heart disease describes a range of conditions that affect your heart. Diseases under the heart disease umbrella include blood vessel diseases, heart rhythm problems, and heart defects you're born with, among others.",
    symptoms: ["Chest pain or discomfort", "Shortness of breath", "Pain in neck, jaw, or throat", "Fatigue", "Irregular heartbeat", "Swelling in legs"],
    prevention: ["Don't smoke", "Exercise regularly", "Maintain healthy diet", "Control blood pressure", "Manage stress"],
    riskFactors: ["High blood pressure", "High cholesterol", "Smoking", "Diabetes", "Family history", "Obesity"],
    color: "destructive"
  },
  {
    id: "alzheimers",
    name: "Alzheimer's Disease",
    icon: Brain,
    category: "Neurological",
    shortDescription: "A progressive neurological disorder causing memory loss and cognitive decline, primarily affecting older adults.",
    fullDescription: "Alzheimer's disease is a progressive neurologic disorder that causes the brain to shrink and brain cells to die. It's the most common cause of dementia — a continuous decline in thinking, behavioral and social skills.",
    symptoms: ["Memory loss", "Difficulty planning", "Confusion with time or place", "Problems with speaking/writing", "Mood changes", "Social withdrawal"],
    prevention: ["Regular exercise", "Social engagement", "Mental stimulation", "Quality sleep", "Healthy diet", "Manage cardiovascular risk"],
    riskFactors: ["Increasing age", "Family history", "Down syndrome", "Head trauma", "Poor sleep patterns"],
    color: "secondary"
  }
];

const Awareness = () => {
  const [selectedDisease, setSelectedDisease] = useState<Disease | null>(null);

  return (
    <div className="min-h-screen bg-gradient-mesh">
      {/* Header Section */}
      <section className="py-12 bg-gradient-hero">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-4">
              <AlertCircle className="h-4 w-4" />
              <span className="text-sm font-medium">Disease Awareness Hub</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
              Know Your Health Risks
            </h1>
            <p className="text-lg text-muted-foreground">
              Explore comprehensive information about common diseases, their symptoms, 
              prevention methods, and risk factors to stay informed and healthy.
            </p>
          </div>
        </div>
      </section>

      {/* Disease Cards Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {diseases.map((disease) => (
              <Card
                key={disease.id}
                className="group overflow-hidden hover:shadow-large transition-all duration-300 hover:-translate-y-1 cursor-pointer"
                onClick={() => setSelectedDisease(disease)}
              >
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className={cn(
                      "w-12 h-12 rounded-lg flex items-center justify-center",
                      disease.color === "primary" && "bg-primary/10",
                      disease.color === "secondary" && "bg-secondary/10",
                      disease.color === "accent" && "bg-accent/10",
                      disease.color === "destructive" && "bg-destructive/10"
                    )}>
                      <disease.icon className={cn(
                        "h-6 w-6",
                        disease.color === "primary" && "text-primary",
                        disease.color === "secondary" && "text-secondary",
                        disease.color === "accent" && "text-accent",
                        disease.color === "destructive" && "text-destructive"
                      )} />
                    </div>
                    <Badge variant="outline" className="text-xs">
                      {disease.category}
                    </Badge>
                  </div>
                  
                  <h3 className="text-xl font-display font-semibold mb-2">
                    {disease.name}
                  </h3>
                  
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                    {disease.shortDescription}
                  </p>
                  
                  <Button 
                    variant="outline" 
                    className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                  >
                    Learn More
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-display font-bold mb-8">
              Global Health Impact
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="p-6 rounded-xl bg-gradient-card border border-border/50">
                <TrendingUp className="h-8 w-8 text-primary mx-auto mb-3" />
                <div className="text-3xl font-bold text-primary mb-1">1.5B+</div>
                <p className="text-sm text-muted-foreground">People at risk globally</p>
              </div>
              <div className="p-6 rounded-xl bg-gradient-card border border-border/50">
                <Shield className="h-8 w-8 text-secondary mx-auto mb-3" />
                <div className="text-3xl font-bold text-secondary mb-1">70%</div>
                <p className="text-sm text-muted-foreground">Preventable with awareness</p>
              </div>
              <div className="p-6 rounded-xl bg-gradient-card border border-border/50">
                <Heart className="h-8 w-8 text-accent mx-auto mb-3" />
                <div className="text-3xl font-bold text-accent mb-1">24/7</div>
                <p className="text-sm text-muted-foreground">Health support available</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Disease Detail Dialog */}
      <Dialog open={!!selectedDisease} onOpenChange={() => setSelectedDisease(null)}>
        <DialogContent className="max-w-3xl max-h-[80vh] overflow-y-auto">
          {selectedDisease && (
            <>
              <DialogHeader>
                <div className="flex items-center gap-3 mb-2">
                  <div className={cn(
                    "w-10 h-10 rounded-lg flex items-center justify-center",
                    selectedDisease.color === "primary" && "bg-primary/10",
                    selectedDisease.color === "secondary" && "bg-secondary/10",
                    selectedDisease.color === "accent" && "bg-accent/10",
                    selectedDisease.color === "destructive" && "bg-destructive/10"
                  )}>
                    <selectedDisease.icon className={cn(
                      "h-6 w-6",
                      selectedDisease.color === "primary" && "text-primary",
                      selectedDisease.color === "secondary" && "text-secondary",
                      selectedDisease.color === "accent" && "text-accent",
                      selectedDisease.color === "destructive" && "text-destructive"
                    )} />
                  </div>
                  <DialogTitle className="text-2xl font-display">
                    {selectedDisease.name}
                  </DialogTitle>
                  <Badge variant="outline">{selectedDisease.category}</Badge>
                </div>
                <DialogDescription className="text-base">
                  {selectedDisease.fullDescription}
                </DialogDescription>
              </DialogHeader>
              
              <div className="space-y-6 mt-6">
                <div>
                  <h4 className="font-semibold text-lg mb-3 text-primary">Common Symptoms</h4>
                  <ul className="grid md:grid-cols-2 gap-2">
                    {selectedDisease.symptoms.map((symptom, index) => (
                      <li key={index} className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-primary"></div>
                        <span className="text-sm">{symptom}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold text-lg mb-3 text-secondary">Prevention Methods</h4>
                  <ul className="grid md:grid-cols-2 gap-2">
                    {selectedDisease.prevention.map((method, index) => (
                      <li key={index} className="flex items-center gap-2">
                        <Shield className="w-4 h-4 text-secondary" />
                        <span className="text-sm">{method}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold text-lg mb-3 text-accent">Risk Factors</h4>
                  <ul className="grid md:grid-cols-2 gap-2">
                    {selectedDisease.riskFactors.map((factor, index) => (
                      <li key={index} className="flex items-center gap-2">
                        <AlertCircle className="w-4 h-4 text-accent" />
                        <span className="text-sm">{factor}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              
              <div className="mt-6 p-4 rounded-lg bg-muted/50 border border-border">
                <p className="text-sm text-muted-foreground">
                  <strong>Disclaimer:</strong> This information is for educational purposes only. 
                  For medical advice, diagnosis, or treatment, please consult a healthcare professional.
                </p>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Awareness;