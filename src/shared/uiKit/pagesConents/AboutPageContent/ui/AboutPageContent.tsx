import React from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './AboutPageContent.module.scss';

interface AboutPageContentProps {
  className?: string;
}

export const AboutPageContent = (props: AboutPageContentProps) => {
  const { className } = props;

  return (
    <div className={classNames(cls.aboutPageContent, {}, [className])}>
      <header>
        <h1>{'Fortune\'s Island'}</h1>
      </header>
      <main>
        <section className={classNames(cls.text)}>
          <img src={'assets/MainImage.png'} alt={''} className={classNames(cls.img)}/>
          <h2>{'Overview:'}</h2>
          <p>
            {`Fortune's Island is an online multiplayer gambling game set on a mysterious tropical 
            island filled with various gambling games, treasure hunts, and challenges. 
            Players can explore the island, socialize with others, and participate in games of chance 
            to win in-game currency and other valuable assets.`}
          </p>
        </section>
        <section className={classNames(cls.text)}>
          <h2>{'Gameplay:'}</h2>
          <ol>
            <li>
              {`Character Creation: Players create a customizable avatar to represent themselves in the game. 
              They can personalize their character's appearance, clothing, and accessories to stand out among 
              other players.`}
            </li>
            <li>
              {`The Island: The island is divided into several regions, each with its own theme and gambling games. 
              Players can explore these regions, discover new games, and participate in different challenges. 
              Some examples of regions include:`}
            </li>
            <ul>
              <li>
                {`Pirate's Cove: Features classic card games like Poker, Blackjack, and Baccarat.`}
              </li>
              <li>
                {`Ancient Temple: Offers various slot machines and themed minigames based on ancient civilizations.`}
              </li>
              <li>
                {`Royal Casino: Includes high-stakes games such as RouletteBody, Craps, and exclusive VIP rooms.`}
              </li>
              <li>
                {`Treasure Hunts: Players can participate in treasure hunts to discover hidden loot, 
                such as in-game currency, rare items, or special abilities that can help them in gambling games. 
                Treasure hunts may involve solving puzzles, following clues, or completing challenges.`}
              </li>
            </ul>

            <li>
              {`Daily Challenges and Events: Players can participate in daily challenges and special events that 
              offer opportunities to win exclusive rewards and bonuses. These challenges may include specific gambling 
              games, team-based competitions, or island-wide scavenger hunts.`}
            </li>
            <li>
              {`In-Game Economy: Players can earn in-game currency by winning gambling games or participating 
              in challenges and events. This currency can be used to purchase items, avatar customization options, 
              or access to exclusive games and areas.`}
            </li>
            <li>
              {`Social Features: Fortune's Island is a social experience, allowing players to interact with others 
              through chat, emotes, and cooperative gameplay. Players can join or create clubs to participate 
              in team-based challenges, trade items, and share strategies.`}
            </li>
          </ol>

        </section>
        <section className={classNames(cls.text)}>
          <h2>{'Monetization:'}</h2>
          <p>
            {`Fortune's Island can be monetized through in-game purchases, such as buying 
            in-game currency, avatar customization options, or access to exclusive games and areas. 
            Additionally, the game can generate revenue through a "Freemium" model, where players 
            can access most of the game for free but can purchase a subscription or premium 
            membership to receive additional benefits, such as exclusive events, faster progression, 
            or ad-free gameplay.`}
          </p>
        </section>
      </main>
    </div>
  );
};
