#version 330 core
out vec4 fragColor;
uniform float iTime;
uniform vec2 iResolution;

void main()
{
   
    vec2 uv = gl_FragCoord.xy/iResolution.xy;
   
 
   
   fragColor = vec4(0.0,0.0,0.0,0.0);
   

  
  if(uv.y > 0.33){
  fragColor = vec4(1.0,1.0,1.0,1.0);
  }
  
   if(uv.y > 0.66){
  fragColor = vec4(0.0, 0.80,0.0,0.0);
  }  
  
  if(uv.x < 0.33){
  fragColor = vec4(1.0,0.0,0.0,0.0);
  }
  
}