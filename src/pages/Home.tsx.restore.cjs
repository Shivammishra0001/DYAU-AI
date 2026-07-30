const fs = require('fs');
const logPath = 'C:\\Users\\Admin\\.gemini\\antigravity\\brain\\a2916400-90e9-4c63-ac7d-9e427d56e71c\\.system_generated\\logs\\transcript_full.jsonl';
const fileContent = fs.readFileSync(logPath, 'utf8');
const lines = fileContent.split('\n');

lines.forEach((line) => {
  if (!line.trim()) return;
  try {
    const obj = JSON.parse(line);
    if (obj.step_index === 602) {
      console.log('Step 602 Tool Calls:');
      obj.tool_calls.forEach(tc => {
        console.log('TargetContent:\n', tc.args.TargetContent);
        console.log('ReplacementContent:\n', tc.args.ReplacementContent);
      });
    }
  } catch(e) {}
});
