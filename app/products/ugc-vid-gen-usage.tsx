import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Code } from "@/components/ui/code";

export function UGCVidGenUsage() {
  return (
    <div className="mt-8">
      <Tabs defaultValue="setup">
        <TabsList className="grid w-full grid-cols-5">
          <TabsTrigger value="setup">Setup</TabsTrigger>
          <TabsTrigger value="usage">Usage</TabsTrigger>
          <TabsTrigger value="examples">Examples</TabsTrigger>
          <TabsTrigger value="tips">Important Tips</TabsTrigger>
          <TabsTrigger value="prompt">Sample Prompt</TabsTrigger>
        </TabsList>
        
        <TabsContent value="setup" className="mt-6 space-y-6">
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Installation</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Follow these steps to set up UGCVidGen on your system:
            </p>
            
            <div className="space-y-4">
              <div className="rounded-lg bg-gray-50 dark:bg-gray-900 p-4 border border-gray-200 dark:border-gray-800">
                <h4 className="font-medium text-gray-900 dark:text-white mb-2">1. Clone the repository</h4>
                <Code language="bash">
                  {`git clone https://github.com/vishnuhimself/UGCVidGen.git
cd UGCVidGen`}
                </Code>
              </div>
              
              <div className="rounded-lg bg-gray-50 dark:bg-gray-900 p-4 border border-gray-200 dark:border-gray-800">
                <h4 className="font-medium text-gray-900 dark:text-white mb-2">2. Install dependencies</h4>
                <Code language="bash">
                  {`pip install moviepy pandas numpy tqdm`}
                </Code>
              </div>
              
              <div className="rounded-lg bg-gray-50 dark:bg-gray-900 p-4 border border-gray-200 dark:border-gray-800">
                <h4 className="font-medium text-gray-900 dark:text-white mb-2">3. Prepare your folder structure</h4>
                <p className="text-gray-600 dark:text-gray-300 mb-2">
                  Create the following folders in your project directory:
                </p>
                <Code language="bash">
                  {`mkdir hook_videos cta_videos music fonts final_videos`}
                </Code>
              </div>
              
              <div className="rounded-lg bg-gray-50 dark:bg-gray-900 p-4 border border-gray-200 dark:border-gray-800">
                <h4 className="font-medium text-gray-900 dark:text-white mb-2">4. Create your hooks CSV file</h4>
                <p className="text-gray-600 dark:text-gray-300 mb-2">
                  Create a CSV file named <code>hooks.csv</code> with the following structure:
                </p>
                <Code language="csv">
                  {`id,text
1,"Your first hook text here"
2,"Your second hook text here"
3,"Another compelling hook"`}
                </Code>
              </div>
            </div>
          </div>
        </TabsContent>
        
        <TabsContent value="usage" className="mt-6 space-y-6">
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Running UGCVidGen</h3>
            
            <div className="rounded-lg bg-gray-50 dark:bg-gray-900 p-4 border border-gray-200 dark:border-gray-800">
              <h4 className="font-medium text-gray-900 dark:text-white mb-2">Basic Usage</h4>
              <p className="text-gray-600 dark:text-gray-300 mb-2">
                Run the script with default settings:
              </p>
              <Code language="bash">
                {`python ugcvidgen.py`}
              </Code>
            </div>
            
            <div className="rounded-lg bg-gray-50 dark:bg-gray-900 p-4 border border-gray-200 dark:border-gray-800">
              <h4 className="font-medium text-gray-900 dark:text-white mb-2">Customizing the Configuration</h4>
              <p className="text-gray-600 dark:text-gray-300 mb-2">
                You can modify the following variables at the top of the script:
              </p>
              <Code language="python">
                {`# ---- CONFIGURATION ----
HOOKS_CSV = "hooks.csv"  # Path to your hooks CSV file
HOOK_VIDEOS_FOLDER = "hook_videos"  # Folder with hook videos
CTA_VIDEOS_FOLDER = "cta_videos"  # Folder with CTA videos
OUTPUT_FOLDER = "final_videos"  # Output folder
NUM_VIDEOS = 10  # Number of videos to create
FONT = "./fonts/BeVietnamPro-Bold.ttf"  # Custom font
FONT_SIZE = 70  # Font size for text overlay
TARGET_RESOLUTION = (1080, 1920)  # 9:16 aspect ratio`}
              </Code>
            </div>
            
            <div className="rounded-lg bg-gray-50 dark:bg-gray-900 p-4 border border-gray-200 dark:border-gray-800">
              <h4 className="font-medium text-gray-900 dark:text-white mb-2">Output Files</h4>
              <p className="text-gray-600 dark:text-gray-300">
                The script generates several output files:
              </p>
              <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-300">
                <li><code>final_videos/</code> - Contains all generated videos</li>
                <li><code>used_hooks.txt</code> - Tracks which hooks have been used</li>
                <li><code>video_list.txt</code> - Records details about each video</li>
                <li><code>video_creation.log</code> - Detailed log of the process</li>
              </ul>
            </div>
          </div>
        </TabsContent>
        
        <TabsContent value="examples" className="mt-6 space-y-6">
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Example Workflows</h3>
            
            <div className="rounded-lg bg-gray-50 dark:bg-gray-900 p-4 border border-gray-200 dark:border-gray-800">
              <h4 className="font-medium text-gray-900 dark:text-white mb-2">E-commerce Product Videos</h4>
              <p className="text-gray-600 dark:text-gray-300">
                Create hooks focused on product benefits and features:
              </p>
              <Code language="csv">
                {`id,text
1,"This kitchen gadget saved me 30 minutes every day"
2,"The one product every home chef needs"
3,"I was skeptical until I tried this kitchen tool"`}
              </Code>
              <p className="text-gray-600 dark:text-gray-300 mt-2">
                Use product demonstration clips in your hook_videos folder and product close-ups with pricing in your cta_videos folder.
              </p>
            </div>
            
            <div className="rounded-lg bg-gray-50 dark:bg-gray-900 p-4 border border-gray-200 dark:border-gray-800">
              <h4 className="font-medium text-gray-900 dark:text-white mb-2">Service Marketing</h4>
              <p className="text-gray-600 dark:text-gray-300">
                Create hooks that address pain points and solutions:
              </p>
              <Code language="csv">
                {`id,text
1,"How I doubled my productivity with this simple technique"
2,"The #1 mistake most people make when managing their time"
3,"This coaching service transformed my business in 30 days"`}
              </Code>
              <p className="text-gray-600 dark:text-gray-300 mt-2">
                Use before/after clips in your hook_videos folder and testimonial clips in your cta_videos folder.
              </p>
            </div>
            
            <div className="rounded-lg bg-gray-50 dark:bg-gray-900 p-4 border border-gray-200 dark:border-gray-800">
              <h4 className="font-medium text-gray-900 dark:text-white mb-2">Customizing Text Appearance</h4>
              <p className="text-gray-600 dark:text-gray-300">
                You can modify the text appearance by editing these parameters in the script:
              </p>
              <Code language="python">
                {`# Create main text clip with improved smoothness
text_clip_args = {
    "txt": hook_text,
    "fontsize": FONT_SIZE,
    "color": TEXT_COLOR,
    "font": FONT,
    "method": 'caption',
    "size": (text_width, None),
    "align": 'center',
    "stroke_color": 'black',
    "stroke_width": 2,
    "kerning": -1,
    "interline": -1,
}`}
              </Code>
            </div>
          </div>
        </TabsContent>
        
        <TabsContent value="tips" className="mt-6 space-y-6">
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Important Tips for Best Results</h3>
            
            <div className="rounded-lg bg-gradient-to-r from-teal-50 to-emerald-50 dark:from-teal-900/20 dark:to-emerald-900/20 p-4 border border-teal-200 dark:border-teal-800/30">
              <h4 className="font-medium text-gray-900 dark:text-white mb-2">Optimal Video Resolution</h4>
              <p className="text-gray-700 dark:text-gray-300">
                Most short-form video platforms (TikTok, Instagram Reels, YouTube Shorts) use a <strong>1080 × 1920 resolution</strong> (9:16 aspect ratio). For best results, ensure your hook videos and CTA videos match this resolution to avoid quality loss or unwanted cropping.
              </p>
            </div>
            
            <div className="rounded-lg bg-gradient-to-r from-teal-50 to-emerald-50 dark:from-teal-900/20 dark:to-emerald-900/20 p-4 border border-teal-200 dark:border-teal-800/30">
              <h4 className="font-medium text-gray-900 dark:text-white mb-2">Royalty-Free Music Resources</h4>
              <p className="text-gray-700 dark:text-gray-300 mb-2">
                You can find high-quality royalty-free music for your videos from these sources:
              </p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300">
                <li><a href="https://pixabay.com/music/" target="_blank" rel="noopener noreferrer" className="text-teal-600 dark:text-teal-400 hover:underline">Pixabay Music</a> - Completely free for commercial use</li>
                <li><a href="https://www.youtube.com/audiolibrary" target="_blank" rel="noopener noreferrer" className="text-teal-600 dark:text-teal-400 hover:underline">YouTube Audio Library</a> - Free music and sound effects</li>
                <li><a href="https://freesound.org/" target="_blank" rel="noopener noreferrer" className="text-teal-600 dark:text-teal-400 hover:underline">Freesound</a> - User-contributed audio samples</li>
                <li><a href="https://mixkit.co/free-stock-music/" target="_blank" rel="noopener noreferrer" className="text-teal-600 dark:text-teal-400 hover:underline">Mixkit</a> - Free music tracks for various moods</li>
              </ul>
            </div>
            
            <div className="rounded-lg bg-gradient-to-r from-teal-50 to-emerald-50 dark:from-teal-900/20 dark:to-emerald-900/20 p-4 border border-teal-200 dark:border-teal-800/30">
              <h4 className="font-medium text-gray-900 dark:text-white mb-2">AI-Generated Hook Videos</h4>
              <p className="text-gray-700 dark:text-gray-300 mb-2">
                You can use AI video generation platforms to create realistic UGC-style hook videos:
              </p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300">
                <li><strong>OpenAI Sora</strong> - Generates highly realistic videos from text prompts</li>
                <li><strong>Runway Gen-2</strong> - Creates videos from text or image inputs</li>
                <li><strong>Pika Labs</strong> - Specializes in character-based animations</li>
                <li><strong>Synthesia</strong> - Creates AI avatars for talking-head videos</li>
                <li><strong>HeyGen</strong> - Produces professional-looking AI spokesperson videos</li>
              </ul>
              <p className="text-gray-700 dark:text-gray-300 mt-2">
                When using AI-generated videos, ensure they match the 9:16 aspect ratio and maintain a natural, authentic UGC feel.
              </p>
            </div>
          </div>
        </TabsContent>
        
        <TabsContent value="prompt" className="mt-6 space-y-6">
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Sample AI Video Prompt</h3>
            
            <div className="rounded-lg bg-gray-50 dark:bg-gray-900 p-4 border border-gray-200 dark:border-gray-800">
              <h4 className="font-medium text-gray-900 dark:text-white mb-2">Example UGC Video Prompt</h4>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Below is a sample prompt used to generate a realistic UGC-style video of a young man in a lecture hall. This type of video works well as a hook for educational products or services.
              </p>
              
              <details className="bg-white dark:bg-gray-800 rounded-md p-2 border border-gray-200 dark:border-gray-700">
                <summary className="font-medium text-teal-600 dark:text-teal-400 cursor-pointer py-2">
                  Click to expand the full prompt
                </summary>
                <div className="mt-3 p-3 bg-gray-50 dark:bg-gray-900 rounded-md text-sm text-gray-700 dark:text-gray-300 whitespace-pre-wrap">
                  {`Create a realistic vertical video of a young man sitting in a lecture hall with a cheerful and engaging atmosphere. The video should replicate the vibrant and lively energy of a classroom setting with the following details:

Key Elements:

1. Setting Details:
• The lecture hall should have a modern design with rows of tiered seating and a neutral color palette (gray, beige, or white tones).
• Include other students in the background, engaged in various activities like chatting, taking notes, or looking at their devices.
• Bright ceiling lights should illuminate the room evenly, creating a well-lit environment.

2. Character and Outfit:
• The young man should have short, slightly tousled hair and a happy, animated expression, reflecting his enjoyment of the moment.
• He is wearing a striped short-sleeve shirt with buttons and a visible lanyard ID badge around his neck.
• His posture is relaxed, slightly leaning back, with one hand potentially holding the camera (selfie-style).

3. Background Activity:
• Add subtle motion in the background, such as students shifting in their seats, sipping water from bottles, or glancing at a lecturer who is off-frame.
• Ensure the background is detailed but not distracting, keeping the focus on the young man.

4. Lighting:
• Use bright, soft lighting to evenly illuminate the scene. The ceiling lights should add a warm, welcoming glow to the environment.
• Ensure the young man's face is well-lit, with no harsh shadows.

5. Camera and Motion:
• The camera angle should be slightly tilted upward, giving a casual, selfie-style view of the scene.
• Include natural movements, such as the young man laughing or turning slightly, to add dynamism and life to the video.

6. Framing and Composition:
• Center the young man in the frame while including enough negative space around him to capture the lecture hall and the students behind him.
• The background students should be slightly out of focus to create a depth-of-field effect that emphasizes the main subject.

7. Atmosphere:
• Capture a lively, energetic vibe with ambient classroom sounds, such as faint chatter, occasional laughter, and the rustle of papers.`}
                </div>
              </details>
              
              <div className="mt-4">
                <p className="text-gray-600 dark:text-gray-300 mb-2">
                  This prompt was used to generate a video similar to:
                </p>
                <div className="relative aspect-[9/16] overflow-hidden rounded-lg bg-gray-100 dark:bg-gray-800 ring-1 ring-gray-900/10 dark:ring-white/10 shadow-md">
                  <img 
                    src="/images/UGCVidGen/UGC.png" 
                    alt="Sample UGC video frame" 
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>
              
              <div className="mt-4 p-3 bg-teal-50 dark:bg-teal-900/20 rounded-md border border-teal-100 dark:border-teal-800/30">
                <h5 className="font-medium text-gray-900 dark:text-white mb-1">Prompt Writing Tips:</h5>
                <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300">
                  <li>Be extremely detailed about the setting, lighting, and character</li>
                  <li>Specify the exact aspect ratio (vertical 9:16 for social media)</li>
                  <li>Include details about natural movements and background activity</li>
                  <li>Describe the mood and atmosphere you want to convey</li>
                  <li>Mention camera angle and framing preferences</li>
                </ul>
              </div>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
} 