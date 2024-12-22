## Project overview
This is Dot Count Game for 5 years old kid.
There are 3 pages
- Configuration
- Game 
- Result

## Project features
- Game page
  - It displays a shape with the number of dots.
  - There are three answer options.
    - Each answer option is correct number of dots, with +1, -1 dots. 
    - If Player selects the correct answer, the total score is increased.
    - If Player selects the incorrect answer, the total score is decreased.
    - If total score is -3, the game is over.
  - There is an End button. Player can end the game and return to Configuration page 

- Result page
  - Display result

## Project dependencies

## Project configuration
Configuration page
  - Select number of dots
  - There is one drag bar. It can select both minimum number and maximum number of dots.
  - There is a toggle to define practice or challenge mode.
    - In practice mode, the number of dots is fixed, which is the maximum number of dots.
    - In challenge mode, the number of dots is a range, which is the minimum number of dots and the maximum number of dots.

## Current File Structure
dotCountingGame/
├── app/
│   ├── fonts/
│   │   ├── GeistMonoVF.woff
│   │   └── GeistVF.woff
│   ├── favicon.ico
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── ui/
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   ├── label.tsx
│   │   ├── slider.tsx
│   │   └── switch.tsx
│   ├── AnswerOptions.tsx
│   ├── Configuration.tsx
│   ├── Game.tsx
│   └── ShapeDisplay.tsx
├── lib/
│   └── utils.ts
├── node_modules/
├── requirements/
│   └── frontend_instructions.md
├── utils/
│   └── shapeGenerator.ts
├── .eslintrc.json
├── .gitignore
├── components.json
├── next-env.d.ts
├── next.config.mjs
├── package-lock.json
├── package.json
├── postcss.config.mjs
├── README.md
├── tailwind.config.ts
└── tsconfig.json
