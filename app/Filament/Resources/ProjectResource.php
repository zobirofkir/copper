<?php

namespace App\Filament\Resources;

use App\Filament\Resources\ProjectResource\Pages;
use App\Models\Project;
use Filament\Forms;
use Filament\Forms\Components\FileUpload;
use Filament\Forms\Components\Select;
use Filament\Forms\Components\Textarea;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Table;
use Filament\Tables\Actions;
use Filament\Tables\Columns;
use Filament\Tables\Columns\ImageColumn;
use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Filters;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\SoftDeletingScope;

class ProjectResource extends Resource
{
    protected static ?string $model = Project::class;

    protected static ?string $navigationIcon = 'heroicon-o-rectangle-stack';
    
    protected static ?string $navigationLabel = 'Project';
    protected static ?string $modelLabel = 'Project';
    protected static ?string $pluralModelLabel = 'Project';
    protected static ?string $navigationGroup = 'Project';

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                Select::make('project_category_id')
                    ->label('Project Category')
                    ->relationship('projectCategory', 'title')
                    ->required(),
                TextInput::make('article')
                    ->label('Title')
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

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                TextColumn::make('article')
                    ->label('Article/Description')
                    ->searchable(),
                TextColumn::make('name_reference')
                    ->label('Nom & Référence')
                    ->searchable(),
                TextColumn::make('materials')
                    ->label('Matériaux')
                    ->searchable(),
                TextColumn::make('dimensions')
                    ->label('Dimensions')
                    ->searchable(),
                TextColumn::make('price_availability')
                    ->label('Prix & Disponibilité')
                    ->searchable(),
                ImageColumn::make('image')
                    ->label('Image'),
            ])
            ->filters([
                //
            ])
            ->actions([
                Actions\EditAction::make(),
            ])
            ->bulkActions([
                Actions\BulkActionGroup::make([
                    Actions\DeleteBulkAction::make(),
                ]),
            ]);
    }

    public static function getRelations(): array
    {
        return [
            //
        ];
    }

    public static function getPages(): array
    {
        return [
            'index' => Pages\ListProjects::route('/'),
            'create' => Pages\CreateProject::route('/create'),
            'edit' => Pages\EditProject::route('/{record}/edit'),
        ];
    }
}
