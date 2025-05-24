<?php

namespace App\Filament\Widgets;

use App\Models\Project;
use Filament\Tables;
use Filament\Tables\Table;
use Filament\Widgets\TableWidget as BaseWidget;

class ProjectsWidget extends BaseWidget
{
    protected static ?int $sort = 2;
    protected int|string|array $columnSpan = 'full';

    public function table(Table $table): Table
    {
        return $table
            ->query(Project::query())
            ->columns([
                Tables\Columns\TextColumn::make('title'),
                Tables\Columns\TextColumn::make('projectCategory.title')
                    ->label('Category'),
                Tables\Columns\ImageColumn::make('image'),
                Tables\Columns\TextColumn::make('client'),
                Tables\Columns\TextColumn::make('location'),
            ])
            ->actions([
                Tables\Actions\Action::make('view')
                    ->url(fn (Project $record): string => route('filament.admin.resources.projects.edit', $record)),
            ]);
    }
}