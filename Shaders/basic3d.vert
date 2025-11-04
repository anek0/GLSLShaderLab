#version 330 core
layout(location = 0) in vec3 aPos;
layout(location = 1) in vec3 aNormal;
layout(location = 2) in vec2 aTexCoord;
 
uniform mat4 model;
uniform mat4 view;
uniform mat4 projection;
uniform float iTime;
 
out vec3 FragPos;
out vec3 Normal;
out vec2 TexCoord;
out vec3 WorldPos;
 
void main()
{
    float displacementZ = 0.20 * sin(iTime * 4 + aPos.x * 2);
 
    vec3 newPosLocal = aPos;
    newPosLocal.z += displacementZ;
 
    WorldPos = vec3(model * vec4(newPosLocal, 1.0));
    FragPos = WorldPos;
    Normal = mat3(transpose(inverse(model))) * aNormal;
    TexCoord = aTexCoord;
    gl_Position = projection * view * vec4(FragPos, 1.0);
}
 
 