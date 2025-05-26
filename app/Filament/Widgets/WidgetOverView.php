<?php

namespace App\Filament\Widgets;

use App\Models\Blog;
use App\Models\Company;
use App\Models\Project;
use App\Models\ProjectCategory;
use Filament\Widgets\StatsOverviewWidget as BaseWidget;
use Filament\Widgets\StatsOverviewWidget\Stat;

class WidgetOverView extends BaseWidget
{
    protected function getStats(): array
    {
        return [
            Stat::make('Blogs', Blog::count())
                ->description('Blogs')
                ->descriptionIcon('heroicon-o-shopping-bag')
                ->chart([1, 10, 5, 2, 20, 30, 45])
                ->color('success'),

            Stat::make('Entreprises', Company::count())
                ->description('Entreprises')
                ->descriptionIcon('heroicon-o-cube')
                ->chart([1, 10, 5, 2, 20, 30, 45])
                ->color('success'),

            Stat::make('Catégories', ProjectCategory::count())
                ->description('Catégories')
                ->descriptionIcon('heroicon-o-cube')
                ->chart([1, 10, 5, 2, 20, 30, 45])
                ->color('success'),

            Stat::make('Projets', Project::count())
                ->description('Projets')
                ->descriptionIcon('heroicon-o-cube')
                ->chart([1, 10, 5, 2, 20, 30, 45])
                ->color('success'),

        ];
    }
}
