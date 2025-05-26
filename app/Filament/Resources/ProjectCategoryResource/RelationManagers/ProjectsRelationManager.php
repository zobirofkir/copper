<?php

namespace App\Filament\Resources\ProjectCategoryResource\RelationManagers;

use Filament\Forms;
use Filament\Forms\Components\FileUpload;
use Filament\Forms\Components\Select;
use Filament\Forms\Components\TextInput;
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
                Select::make('project_category_id')
                    ->label('Catégorie de Projet')
                    ->relationship('projectCategory', 'title')
                    ->required(),
                TextInput::make('article')
                    ->label('Titre')
                    ->required()
                    ->maxLength(255),
                TextInput::make('name_reference')
                    ->label('Référence')
                    ->required()
                    ->maxLength(255),
                TextInput::make('materials')
                    ->label('Matériaux')
                    ->maxLength(255),
                TextInput::make('dimensions')
                    ->label('Dimensions')
                    ->maxLength(255),
                TextInput::make('price_availability')
                    ->label('Prix')
                    ->maxLength(255),
                FileUpload::make('image')
                    ->label('Image')
                    ->image()
                    ->directory('projects')
                    ->required(),
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
                Tables\Columns\ImageColumn::make('image')
                    ->label('Image'),
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