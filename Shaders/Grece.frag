#version 330 core
out vec4 fragColor;
uniform float iTime;
uniform vec2 iResolution;
in vec2 TexCoord;
in vec3 Normal;

vec3 lightDir = vec3(0.75, -1.0, 0.0);
float ambient = 0.2;

void main()
{
    vec2 uv = TexCoord;
    vec4 textureColor;

    if(uv.y > 0.6670 && uv.y < 0.7777 && uv.x < 0.3333)
    {
        textureColor = vec4(1.0,1.0,1.0,1.0);
    }
    else if(uv.x > 0.0999 && uv.x < 0.1888 && uv.y > 0.4)
    {
        textureColor = vec4(1.0,1.0,1.0,1.0);
    }
    else if (uv.y > 0.7777 && uv.y < 0.8888 && uv.x > 0.3333)
    {
        textureColor = vec4(1.0,1.0,1.0,1.0);
    }
    else if (uv.y > 0.5555 && uv.y < 0.6666 && uv.x > 0.3333)
    {
        textureColor = vec4(1.0,1.0,1.0,1.0);
    }
    else if (uv.y > 0.3333 && uv.y < 0.4444)
    {
        textureColor = vec4(1.0,1.0,1.0,1.0);
    }
    else if (uv.y > 0.1111 && uv.y < 0.2222)
    {
        textureColor = vec4(1.0,1.0,1.0,1.0);
    }
    else 
    {
        textureColor = vec4(0.02,0.369,0.694,1.0);
    }
    
    float brightness = clamp(dot(Normal, -lightDir), 0.0, 1.0);

    fragColor = textureColor * (brightness + ambient);
}