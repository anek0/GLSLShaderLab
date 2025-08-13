#version 330 core
out vec4 FragColor;
uniform float iTime;
uniform vec2 iResolution;


out vec4 FragColor;



void main() {
    vec2 uv = gl_FragCoord.xy / iResolution.xy;
    vec3 color = vec3(0.0);

    // Fundo verde
    if (uv.y < 0.75) {
        color = vec3(0.0, 0.55, 0.0); // Verde escuro
    }

    // Losango amarelo
    float dist = distance(uv, vec2(0.5, 0.5));
    float angle = atan(uv.y - 0.5, uv.x - 0.5);
    if (dist < 0.35 && angle > -2.356 && angle < -0.785) {
        color = vec3(1.0, 1.0, 0.0); // Amarelo
    }

    // Círculo azul
    if (distance(uv, vec2(0.5, 0.5)) < 0.2) {
        color = vec3(0.0, 0.0, 0.5); // Azul
    }

    // Estrelas (exemplo)
    float starSize = 0.01;
    float star1 = step(starSize, distance(uv, vec2(0.4, 0.6)));
    float star2 = step(starSize, distance(uv, vec2(0.6, 0.4)));
    if (star1 > 0.0 || star2 > 0.0) {
      color = vec3(1.0);
    }


    // Faixa branca com texto (exemplo simples)
    if (uv.y > 0.45 && uv.y < 0.55) {
        color = vec3(1.0);
        if (uv.x > 0.2 && uv.x < 0.8) {
            color = vec3(0.0, 0.55, 0.0); // Verde
        }
    }


    FragColor = vec4(color, 1.0);
}
  
