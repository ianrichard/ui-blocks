

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ExplorerLayout } from './explorer/layouts/ExplorerLayout';
import { CardPage } from './explorer/pages/CardPage';
import { TypographyPage } from './explorer/pages/TypographyPage';
import { ButtonPage } from './explorer/pages/ButtonPage';
import { LayoutPage } from './explorer/pages/LayoutPage';
import { ArticleCardPage } from './explorer/pages/patterns/ArticleCardPage';
import { HeroPage } from './explorer/pages/patterns/HeroPage';
import { FeaturesPage } from './explorer/pages/patterns/FeaturesPage';
import { RichMediaCardPage } from './explorer/pages/patterns/RichMediaCardPage';
import { ArticleTeaserPage } from './explorer/pages/patterns/ArticleTeaserPage';
import { RobustPatternPage } from './explorer/pages/patterns/RobustPatternPage';
import { StructurePage } from './explorer/pages/patterns/StructurePage';
import { DashboardPage } from './explorer/pages/DashboardPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ExplorerLayout />}>
          <Route index element={<DashboardPage />} />
          <Route path="blocks/card" element={<CardPage />} />
          <Route path="blocks/typography" element={<TypographyPage />} />
          <Route path="blocks/button" element={<ButtonPage />} />
          <Route path="blocks/layout" element={<LayoutPage />} />
          <Route path="patterns/article" element={<ArticleCardPage />} />
          <Route path="patterns/hero" element={<HeroPage />} />
          <Route path="patterns/features" element={<FeaturesPage />} />
          <Route path="patterns/rich-media" element={<RichMediaCardPage />} />
          <Route path="patterns/teaser" element={<ArticleTeaserPage />} />
          <Route path="patterns/robust" element={<RobustPatternPage />} />
          <Route path="patterns/structure" element={<StructurePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
