#version 330 core
out vec4 FragColor;
uniform float iTime;
uniform vec2 iResolution;

void main() {
    vec2 uv = gl_FragCoord.xy / iResolution.xy;
    float prop = iResolution.x / iResolution.y;

    float wave_strength = 0.1;
    float wave_frequency = 5.0;
    float wave = sin(uv.x * wave_frequency + iTime) * wave_strength;
    float cost=cos(iTime+uv.x*4.0)*0.50;
    
    vec2 displaced_uv = vec2(uv.x, uv.y + wave);

    float x = length(vec2(displaced_uv.x * prop, displaced_uv.y) - vec2(prop / 2.0, 0.5));

    FragColor = vec4(1, 1, 1, 1.0);

    if (x < 0.3) {
        FragColor = vec4(1, 0, 0, 1.0);
    }


    if(uv.y<(0.1*cost+0.2)){
        
        FragColor = vec4(0);
    }
   
    if(uv.y>(0.1*cost+0.9)){
        FragColor = vec4(0);
    }
    if(uv.x<0.1){
     FragColor = vec4(0);
    }
    if(uv.x>0.9){
     FragColor = vec4(0);
    }

}