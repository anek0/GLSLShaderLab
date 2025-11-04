#version 330 core
out vec4 FragColor;

in vec3 FragPos;
in vec3 Normal;
in vec2 TexCoord;
in vec3 WorldPos;

uniform float iTime;
uniform vec2 iResolution;
uniform vec3 viewPos;
uniform sampler2D texture2;
uniform sampler2D texture3;

void main()
{
    vec2 scaleFactor = vec2(3.1,5); 
    vec2 scaledTexCoord = TexCoord * scaleFactor;
    
    vec4 texColor = texture(texture2, scaledTexCoord); 
    
    vec3 norm = normalize(Normal);
    norm = -norm; 
    
    vec3 lightPos = vec3(2.0 * sin(iTime), 4.0, 6.0);
    vec3 lightColor = vec3(1.0, 1.0, 1.0);
    
    vec3 ambient = 0.5 * lightColor;
    
    vec3 lightDir = normalize(lightPos - FragPos);
    float diff = max(dot(norm, lightDir), 0.0);
    vec3 diffuse = diff * lightColor;
    
    float specularStrength = 0.5;
    vec3 viewDir = normalize(viewPos - FragPos);
    vec3 reflectDir = reflect(-lightDir, norm);
    float spec = pow(max(dot(viewDir, reflectDir), 0.0), 32);
    vec3 specular = specularStrength * spec * lightColor;
    
    vec3 baseColor = texColor.rgb;
    
    float colorVariation = 0.5 + 0.5 * sin(WorldPos.x * 1.0 + iTime);
    baseColor.r += colorVariation * 0.3;
    baseColor.g -= colorVariation * 0.1;
    
    vec3 result = (ambient + diffuse + specular) * baseColor;
    
    FragColor = vec4(result, texColor.a);
}