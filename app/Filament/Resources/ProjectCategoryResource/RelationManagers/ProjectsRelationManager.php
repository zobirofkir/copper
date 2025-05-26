<?php

namespace App\Filament\Resources\ProjectCategoryResource\RelationManagers;

use Filament\Forms;
use Filament\Forms\Form;
use Filament\Resources\RelationManagers\RelationManager;
use Filament\Tables;
use Filament\Tables\Table;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\SoftDeletingScope;

class ProjectsRelationManager extends RelationManager
{
    protected static string $relationship = 'projects';

    public function form(Form $form): Form
    {
        return $form
            ->schema([
                Forms\Components\TextInput::make('article')
                    ->label('Article/Description')
                    ->required()
                    ->maxLength(255),
                Forms\Components\TextInput::make('name_reference')
                    ->label('Nom & Référence')
                    ->required()
                    ->maxLength(255),
                Forms\Components\TextInput::make('materials')
                    ->label('Matériaux')
                    ->maxLength(255),
                Forms\Components\TextInput::make('dimensions')
                    ->label('Dimensions')
                    ->maxLength(255),
                Forms\Components\TextInput::make('price_availability')
                    ->label('Prix & Disponibilité')
                    ->maxLength(255),
            ])->columns(1);
    }

    public function table(Table $table): Table
    {
        return $table
            ->recordTitleAttribute('article')
            ->columns([
                Tables\Columns\TextColumn::make('article')
                    ->label('Article/Description'),
                Tables\Columns\TextColumn::make('name_reference')
                    ->label('Nom & Référence'),
                Tables\Columns\TextColumn::make('materials')
                    ->label('Matériaux'),
                Tables\Columns\TextColumn::make('dimensions')
                    ->label('Dimensions'),
                Tables\Columns\TextColumn::make('price_availability')
                    ->label('Prix & Disponibilité'),
            ])
            ->filters([
                //
            ])
            ->headerActions([
                Tables\Actions\CreateAction::make(),
            ])
            ->actions([
                Tables\Actions\EditAction::make(),
                Tables\Actions\DeleteAction::make(),
            ])
            ->bulkActions([
                Tables\Actions\BulkActionGroup::make([
                    Tables\Actions\DeleteBulkAction::make(),
                ]),
            ]);
    }
}